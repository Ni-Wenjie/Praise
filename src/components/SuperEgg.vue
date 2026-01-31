<template>
  <transition name="super-egg">
    <div v-if="visible" class="super-egg-overlay">
      <div class="super-egg-content">
        <div class="super-egg-icon">{{ icon }}</div>
        <h2 class="super-egg-message">{{ message }}</h2>
        <p class="super-egg-subtitle">常迦悦，考研加油！</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
/**
 * 超级彩蛋组件
 * 显示超级彩蛋效果
 */

// 定义组件属性
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: '🎉'
  }
})
</script>

<style scoped>
.super-egg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.super-egg-content {
  text-align: center;
  animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.super-egg-icon {
  font-size: 120px;
  margin-bottom: 30px;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.super-egg-message {
  font-size: 48px;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(255, 107, 157, 0.8),
               0 0 40px rgba(255, 107, 157, 0.6),
               0 0 60px rgba(255, 107, 157, 0.4);
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 20px rgba(255, 107, 157, 0.8),
                 0 0 40px rgba(255, 107, 157, 0.6),
                 0 0 60px rgba(255, 107, 157, 0.4);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 107, 157, 1),
                 0 0 60px rgba(255, 107, 157, 0.8),
                 0 0 90px rgba(255, 107, 157, 0.6);
  }
}

.super-egg-subtitle {
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
  animation: slideUp 0.5s ease-out 0.3s both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.super-egg-enter-active,
.super-egg-leave-active {
  transition: opacity 0.5s ease;
}

.super-egg-enter-from,
.super-egg-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .super-egg-icon {
    font-size: 80px;
    margin-bottom: 20px;
  }
  
  .super-egg-message {
    font-size: 32px;
    margin-bottom: 15px;
  }
  
  .super-egg-subtitle {
    font-size: 18px;
  }
}
</style>
