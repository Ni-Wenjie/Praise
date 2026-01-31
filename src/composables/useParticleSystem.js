import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 粒子效果系统
 * 提供多种粒子效果：背景粒子、心形粒子、鼠标粒子、爆炸效果等
 */
export function useParticleSystem() {
  // 粒子数组
  const particles = ref([])
  
  // 粒子定时器
  let particleInterval = null
  let heartInterval = null
  
  // 粒子类型枚举
  const ParticleType = {
    BACKGROUND: 'background',  // 背景粒子
    HEART: 'heart',            // 心形粒子
    MOUSE: 'mouse',            // 鼠标粒子
    EXPLOSION: 'explosion',    // 爆炸粒子
    HEART_EXPLOSION: 'heart_explosion',  // 心形爆发
    SUPER_EXPLOSION: 'super_explosion'   // 超级爆炸
  }
  
  // 粒子表情符号
  const particleEmojis = ['💖', '✨', '⭐', '🎉', '🎊', '💕', '🌟', '💗', '💓', '💝']
  
  /**
   * 创建背景粒子
   * 在背景中缓慢漂浮的星星粒子
   */
  function createBackgroundParticle() {
    const particle = {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      emoji: '⭐',
      type: ParticleType.BACKGROUND,
      opacity: Math.random() * 0.5 + 0.3
    }
    particles.value.push(particle)
  }
  
  /**
   * 创建心形粒子
   * 从底部升起的心形粒子
   */
  function createHeartParticle() {
    const particle = {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 30,
      size: Math.random() * 25 + 15,
      speedX: (Math.random() - 0.5) * 1,
      speedY: -(Math.random() * 2 + 1),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      emoji: '💖',
      type: ParticleType.HEART,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01
    }
    particles.value.push(particle)
    
    // 8秒后移除粒子
    setTimeout(() => {
      const index = particles.value.findIndex(p => p.id === particle.id)
      if (index > -1) {
        particles.value.splice(index, 1)
      }
    }, 8000)
  }
  
  /**
   * 创建鼠标跟随粒子
   * @param {number} x - 鼠标X坐标
   * @param {number} y - 鼠标Y坐标
   */
  function createMouseParticle(x, y) {
    const particle = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      size: Math.random() * 10 + 5,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 5,
      emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
      type: ParticleType.MOUSE
    }
    particles.value.push(particle)
    
    // 2秒后移除粒子
    setTimeout(() => {
      const index = particles.value.findIndex(p => p.id === particle.id)
      if (index > -1) {
        particles.value.splice(index, 1)
      }
    }, 2000)
  }
  
  /**
   * 创建爆炸效果
   * @param {number} count - 粒子数量
   * @param {number} centerX - 爆炸中心X坐标
   * @param {number} centerY - 爆炸中心Y坐标
   * @param {string} emoji - 粒子表情符号（可选）
   */
  function createExplosion(count = 30, centerX = window.innerWidth / 2, centerY = window.innerHeight / 2, emoji = null) {
    for (let i = 0; i < count; i++) {
      const particle = {
        id: Date.now() + Math.random() + i,
        x: centerX,
        y: centerY,
        size: Math.random() * 30 + 15,
        speedX: (Math.random() - 0.5) * 15,
        speedY: (Math.random() - 0.5) * 15,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        emoji: emoji || particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        type: ParticleType.EXPLOSION
      }
      particles.value.push(particle)
      
      // 1.5秒后移除粒子
      setTimeout(() => {
        const index = particles.value.findIndex(p => p.id === particle.id)
        if (index > -1) {
          particles.value.splice(index, 1)
        }
      }, 1500)
    }
  }
  
  /**
   * 创建心形爆发效果
   * @param {number} count - 粒子数量
   * @param {number} centerX - 爆发中心X坐标
   * @param {number} centerY - 爆发中心Y坐标
   */
  function createHeartExplosion(count = 15, centerX = window.innerWidth / 2, centerY = window.innerHeight / 2) {
    const heartEmojis = ['💖', '💗', '💓', '💝', '💕']
    for (let i = 0; i < count; i++) {
      const particle = {
        id: Date.now() + Math.random() + i,
        x: centerX,
        y: centerY,
        size: Math.random() * 35 + 20,
        speedX: (Math.random() - 0.5) * 12,
        speedY: (Math.random() - 0.5) * 12,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        type: ParticleType.HEART_EXPLOSION
      }
      particles.value.push(particle)
      
      // 2秒后移除粒子
      setTimeout(() => {
        const index = particles.value.findIndex(p => p.id === particle.id)
        if (index > -1) {
          particles.value.splice(index, 1)
        }
      }, 2000)
    }
  }
  
  /**
   * 创建超级爆炸效果
   * @param {number} centerX - 爆炸中心X坐标
   * @param {number} centerY - 爆炸中心Y坐标
   */
  function createSuperExplosion(centerX = window.innerWidth / 2, centerY = window.innerHeight / 2) {
    for (let i = 0; i < 50; i++) {
      const particle = {
        id: Date.now() + Math.random() + i,
        x: centerX,
        y: centerY,
        size: Math.random() * 40 + 20,
        speedX: (Math.random() - 0.5) * 20,
        speedY: (Math.random() - 0.5) * 20,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
        emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        type: ParticleType.SUPER_EXPLOSION
      }
      particles.value.push(particle)
      
      // 2.5秒后移除粒子
      setTimeout(() => {
        const index = particles.value.findIndex(p => p.id === particle.id)
        if (index > -1) {
          particles.value.splice(index, 1)
        }
      }, 2500)
    }
  }
  
  /**
   * 更新粒子位置
   * 每一帧更新所有粒子的位置和状态
   */
  function updateParticles() {
    particles.value.forEach(particle => {
      // 更新位置
      particle.x += particle.speedX
      particle.y += particle.speedY
      particle.rotation += particle.rotationSpeed
      
      // 心形粒子摆动效果
      if (particle.type === ParticleType.HEART) {
        particle.sway += particle.swaySpeed
        particle.x += Math.sin(particle.sway) * 0.5
      }
      
      // 背景粒子边界检测
      if (particle.type === ParticleType.BACKGROUND) {
        if (particle.x < -50) particle.x = window.innerWidth + 50
        if (particle.x > window.innerWidth + 50) particle.x = -50
        if (particle.y < -50) particle.y = window.innerHeight + 50
        if (particle.y > window.innerHeight + 50) particle.y = -50
      }
      
      // 爆炸粒子减速
      if (particle.type === ParticleType.EXPLOSION || 
          particle.type === ParticleType.HEART_EXPLOSION || 
          particle.type === ParticleType.SUPER_EXPLOSION) {
        particle.speedX *= 0.98
        particle.speedY *= 0.98
        particle.rotationSpeed *= 0.98
      }
    })
  }
  
  /**
   * 初始化粒子系统
   * 创建初始背景粒子并启动定时器
   */
  function initParticleSystem() {
    // 创建20个背景粒子
    for (let i = 0; i < 20; i++) {
      createBackgroundParticle()
    }
    
    // 每3秒创建一个心形粒子
    heartInterval = setInterval(() => {
      createHeartParticle()
    }, 3000)
  }
  
  /**
   * 清理粒子系统
   * 清除所有定时器
   */
  function cleanupParticleSystem() {
    if (particleInterval) {
      clearInterval(particleInterval)
      particleInterval = null
    }
    if (heartInterval) {
      clearInterval(heartInterval)
      heartInterval = null
    }
    particles.value = []
  }
  
  /**
   * 组件挂载时初始化
   */
  onMounted(() => {
    initParticleSystem()
  })
  
  /**
   * 组件卸载时清理
   */
  onUnmounted(() => {
    cleanupParticleSystem()
  })
  
  return {
    particles,
    ParticleType,
    createBackgroundParticle,
    createHeartParticle,
    createMouseParticle,
    createExplosion,
    createHeartExplosion,
    createSuperExplosion,
    updateParticles,
    initParticleSystem,
    cleanupParticleSystem
  }
}
