<template>
  <div class="praise-card" :class="{ 'flipping': isFlipping }">
    <div class="card-inner">
      <div class="card-front">
        <div class="card-icon" :style="{ animationDelay: iconDelay + 'ms' }">
          {{ praise.icon }}
        </div>
        <h3 class="card-title" :style="{ animationDelay: titleDelay + 'ms' }">
          {{ praise.title }}
        </h3>
        <p class="card-content" :style="{ animationDelay: contentDelay + 'ms' }">
          {{ praise.content }}
        </p>
        <div class="card-category" :style="{ animationDelay: categoryDelay + 'ms' }">
          {{ getCategoryName(praise.category) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getRandomDelay } from '../utils/animationUtils'

/**
 * 夸奖卡片组件
 * 显示夸奖内容，带有翻转动画效果
 */

// 定义组件属性
const props = defineProps({
  praise: {
    type: Object,
    required: true
  }
})

// 定义组件事件
const emit = defineEmits(['flip-complete'])

// 是否正在翻转
const isFlipping = ref(false)

// 图标动画延迟
const iconDelay = ref(0)

// 标题动画延迟
const titleDelay = ref(0)

// 内容动画延迟
const contentDelay = ref(0)

// 分类动画延迟
const categoryDelay = ref(0)

/**
 * 获取分类名称
 * @param {string} category - 分类代码
 * @returns {string} 分类名称
 */
function getCategoryName(category) {
  const categoryNames = {
    'study': '学习',
    'personality': '性格',
    'future': '未来',
    'encouragement': '鼓励',
    'special': '特别'
  }
  return categoryNames[category] || '其他'
}

/**
 * 触发翻转动画
 */
function triggerFlip() {
  isFlipping.value = true
  
  // 翻转动画完成后重置状态
  setTimeout(() => {
    isFlipping.value = false
    emit('flip-complete')
  }, 600)
}

/**
 * 初始化动画延迟
 */
function initAnimationDelays() {
  iconDelay.value = getRandomDelay(0, 100)
  titleDelay.value = getRandomDelay(100, 200)
  contentDelay.value = getRandomDelay(200, 300)
  categoryDelay.value = getRandomDelay(300, 400)
}

// 组件挂载时初始化
onMounted(() => {
  initAnimationDelays()
})

// 暴露方法给父组件
defineExpose({
  triggerFlip
})
</script>

<style scoped>
.praise-card {
  perspective: 1000px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.card-front {
  position: relative;
  width: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.4s ease;
}

.praise-card:hover .card-front {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.6);
}

.card-icon {
  font-size: 80px;
  margin-bottom: 20px;
  animation: bounceRotate 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
  transform: scale(0);
}

@keyframes bounceRotate {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  60% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.card-title {
  font-size: 28px;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-content {
  font-size: 18px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 25px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.card-category {
  padding: 8px 20px;
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
  transform: scale(0.8);
  animation: pulseScale 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
}

@keyframes pulseScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.flipping .card-inner {
  transform: rotateY(180deg);
}

@media (max-width: 768px) {
  .card-front {
    padding: 30px 20px;
    min-height: 280px;
  }
  
  .card-icon {
    font-size: 60px;
    margin-bottom: 15px;
  }
  
  .card-title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .card-content {
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
