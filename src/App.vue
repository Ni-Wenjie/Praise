<script setup>
/**
 * 夸夸乐主应用组件
 * 功能：展示夸奖常迦悦的各种形式，充满惊喜感和大型动态效果
 */

import { ref, onMounted, onUnmounted } from 'vue'
import { useParticleSystem } from './composables/useParticleSystem.js'
import { useEasterEggSystem } from './composables/useEasterEggSystem.js'
import PraiseCard from './components/PraiseCard.vue'
import ParticleSystem from './components/ParticleSystem.vue'
import SuperEgg from './components/SuperEgg.vue'
import { getRandomPraise, getAllPraises, PRAISE_CATEGORIES } from './data/praiseData.js'

// 使用粒子系统
const {
  particles,
  createMouseParticle,
  createExplosion,
  createHeartExplosion,
  createSuperExplosion,
  updateParticles
} = useParticleSystem()

// 使用彩蛋系统
const praiseList = getAllPraises()
const {
  surpriseMessage,
  showSurprise,
  showSuperEgg,
  handleClick,
  getRandomPraise: getRandomPraiseFromSystem
} = useEasterEggSystem(praiseList)

// 当前显示的夸奖
const currentPraise = ref(getRandomPraise())

// 夸奖卡片组件引用
const praiseCardRef = ref(null)

// 动画状态
const isAnimating = ref(false)

// 粒子更新定时器
let particleUpdateTimer = null

/**
 * 初始化应用
 */
onMounted(() => {
  // 启动粒子更新循环
  startParticleUpdateLoop()
  
  // 监听鼠标移动
  window.addEventListener('mousemove', handleMouseMove)
  
  // 监听键盘事件
  window.addEventListener('keydown', handleKeyPress)
})

/**
 * 组件卸载时清理
 */
onUnmounted(() => {
  // 停止粒子更新循环
  stopParticleUpdateLoop()
  
  // 移除事件监听
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('keydown', handleKeyPress)
})

/**
 * 启动粒子更新循环
 */
function startParticleUpdateLoop() {
  function update() {
    updateParticles()
    particleUpdateTimer = requestAnimationFrame(update)
  }
  update()
}

/**
 * 停止粒子更新循环
 */
function stopParticleUpdateLoop() {
  if (particleUpdateTimer) {
    cancelAnimationFrame(particleUpdateTimer)
    particleUpdateTimer = null
  }
}

/**
 * 处理鼠标移动
 * @param {MouseEvent} e - 鼠标事件
 */
function handleMouseMove(e) {
  // 鼠标移动时创建小粒子
  if (Math.random() > 0.7) {
    createMouseParticle(e.clientX, e.clientY)
  }
}

/**
 * 处理键盘事件
 * @param {KeyboardEvent} e - 键盘事件
 */
function handleKeyPress(e) {
  if (e.code === 'Space') {
    e.preventDefault()
    refreshRandomPraise()
  }
}

/**
 * 刷新随机夸奖
 */
function refreshRandomPraise() {
  isAnimating.value = true
  
  // 触发卡片翻转动画
  if (praiseCardRef.value) {
    praiseCardRef.value.triggerFlip()
  }
  
  // 创建爆炸粒子效果
  createExplosion(30, window.innerWidth / 2, window.innerHeight / 2)
  
  // 创建心形爆发效果
  createHeartExplosion(15, window.innerWidth / 2, window.innerHeight / 2)
  
  // 处理点击事件（可能触发超级彩蛋）
  handleClick(() => {
    createSuperExplosion(window.innerWidth / 2, window.innerHeight / 2)
  })
  
  // 延迟更新夸奖内容
  setTimeout(() => {
    currentPraise.value = getRandomPraise()
    isAnimating.value = false
  }, 300)
}

/**
 * 获取分类名称
 * @param {string} category - 分类代码
 * @returns {string} 分类名称
 */
function getCategoryName(category) {
  const categoryMap = {
    [PRAISE_CATEGORIES.STUDY]: '学习',
    [PRAISE_CATEGORIES.PERSONALITY]: '性格',
    [PRAISE_CATEGORIES.FUTURE]: '未来',
    [PRAISE_CATEGORIES.ENCOURAGEMENT]: '鼓励',
    [PRAISE_CATEGORIES.SPECIAL]: '特别'
  }
  return categoryMap[category] || '其他'
}
</script>

<template>
  <div class="app-container">
    <!-- 粒子效果层 -->
    <ParticleSystem :particles="particles" />
    
    <!-- 彩蛋提示 -->
    <transition name="surprise">
      <div v-if="showSurprise" class="surprise-message">
        {{ surpriseMessage }}
      </div>
    </transition>
    
    <!-- 超级彩蛋 -->
    <SuperEgg 
      :visible="showSuperEgg" 
      :message="surpriseMessage" 
      icon="🎉"
    />
    
    <!-- 页面标题 -->
    <header class="header">
      <h1 class="title">
        <span 
          class="title-char" 
          v-for="(char, index) in '✨ 夸夸乐 ✨'" 
          :key="index" 
          :style="{ animationDelay: index * 0.08 + 's' }"
        >
          {{ char }}
        </span>
      </h1>
      <p class="subtitle">为常迦悦加油！考研必胜！</p>
    </header>
    
    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="random-mode">
        <PraiseCard 
          ref="praiseCardRef"
          :praise="currentPraise" 
          @flip-complete="() => {}"
        />
        <button class="refresh-btn" @click="refreshRandomPraise">
          <span class="btn-icon">🎲</span>
          <span class="btn-text">换一个惊喜</span>
        </button>
        <p class="hint-text">💡 提示：按空格键或快速连续点击5次触发超级彩蛋！</p>
      </div>
    </main>
    
    <!-- 页脚 -->
    <footer class="footer">
      <p class="footer-text">
        <span class="heart">💖</span>
        <span>常迦悦，你是最棒的！</span>
        <span class="heart">💖</span>
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* 应用容器 */
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* 彩蛋提示 */
.surprise-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 2000;
}

.surprise-enter-active {
  animation: surprisePopup 0.5s ease-out;
}

.surprise-leave-active {
  animation: surprisePopup 0.3s ease-out reverse;
}

@keyframes surprisePopup {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.2); }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

/* 页面标题 */
.header {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  z-index: 10;
}

.title {
  font-size: 3rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.title-char {
  display: inline-block;
  animation: titleBounce 1s ease-in-out infinite;
}

@keyframes titleBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.subtitle {
  font-size: 1.2rem;
  margin: 0.5rem 0 0;
  opacity: 0.9;
  animation: subtitleGlow 2s ease-in-out infinite;
}

@keyframes subtitleGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
  50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6); }
}

/* 主内容区域 */
.main-content {
  width: 100%;
  max-width: 1200px;
  flex: 1;
  z-index: 10;
}

/* 随机模式 */
.random-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.refresh-btn {
  padding: 1.2rem 3.5rem;
  font-size: 1.3rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  background-size: 200% 200%;
  color: white;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  animation: btnGradient 3s ease infinite;
}

@keyframes btnGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.refresh-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: rotate(45deg);
  animation: btnShine 2s infinite;
}

@keyframes btnShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

.refresh-btn:hover {
  transform: translateY(-5px) scale(1.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

.refresh-btn:active {
  transform: translateY(-2px) scale(1.02);
}

.btn-icon {
  font-size: 1.8rem;
  animation: btnIconSpin 2s linear infinite;
}

@keyframes btnIconSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.hint-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  animation: hintPulse 2s ease-in-out infinite;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

/* 页脚 */
.footer {
  margin-top: 3rem;
  text-align: center;
  color: white;
  font-size: 1.3rem;
  z-index: 10;
}

.footer-text {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.heart {
  animation: heartBeat 1s ease-in-out infinite;
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .refresh-btn {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
}
</style>
