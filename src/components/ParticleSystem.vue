<template>
  <div class="particle-container">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :class="getParticleClass(particle)"
      :style="getParticleStyle(particle)"
    >
      {{ particle.emoji }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * 粒子效果组件
 * 显示各种类型的粒子效果
 */

// 定义组件属性
const props = defineProps({
  particles: {
    type: Array,
    required: true
  }
})

/**
 * 获取粒子CSS类名
 * @param {Object} particle - 粒子对象
 * @returns {Array} CSS类名数组
 */
function getParticleClass(particle) {
  const classes = []
  
  if (particle.type === 'background') {
    classes.push('particle-background')
  } else if (particle.type === 'heart') {
    classes.push('particle-heart')
  } else if (particle.type === 'mouse') {
    classes.push('particle-mouse')
  } else if (particle.type === 'explosion') {
    classes.push('particle-explosion')
  } else if (particle.type === 'heart_explosion') {
    classes.push('particle-heart-explosion')
  } else if (particle.type === 'super_explosion') {
    classes.push('particle-super-explosion')
  }
  
  return classes
}

/**
 * 获取粒子样式
 * @param {Object} particle - 粒子对象
 * @returns {Object} 样式对象
 */
function getParticleStyle(particle) {
  return {
    left: particle.x + 'px',
    top: particle.y + 'px',
    fontSize: particle.size + 'px',
    transform: `rotate(${particle.rotation}deg)`,
    opacity: particle.opacity || 1
  }
}
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
}

.particle {
  position: absolute;
  user-select: none;
  will-change: transform, left, top;
}

.particle-background {
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.particle-heart {
  animation: floatUp 8s ease-out forwards;
}

@keyframes floatUp {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  10% {
    opacity: 1;
    transform: translateY(-50px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-800px) scale(0.3);
  }
}

.particle-mouse {
  animation: mouseFade 2s ease-out forwards;
}

@keyframes mouseFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0) translateY(-50px);
  }
}

.particle-explosion {
  animation: explode 1.5s ease-out forwards;
}

@keyframes explode {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

.particle-heart-explosion {
  animation: heartExplode 2s ease-out forwards;
}

@keyframes heartExplode {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

.particle-super-explosion {
  animation: superExplode 2.5s ease-out forwards;
}

@keyframes superExplode {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    transform: scale(2);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
