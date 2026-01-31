/**
 * 动画效果工具类
 * 提供常用的动画效果和工具函数
 */

/**
 * 动画持续时间常量
 */
export const AnimationDuration = {
  FAST: 300,      // 快速动画
  NORMAL: 500,    // 普通动画
  SLOW: 800,      // 慢速动画
  VERY_SLOW: 1200 // 很慢的动画
}

/**
 * 缓动函数类型
 */
export const EasingType = {
  LINEAR: 'linear',
  EASE: 'ease',
  EASE_IN: 'ease-in',
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  ELASTIC: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
}

/**
 * 获取动画过渡样式
 * @param {string} property - CSS属性
 * @param {number} duration - 持续时间（毫秒）
 * @param {string} easing - 缓动函数
 * @returns {string} 过渡样式字符串
 */
export function getTransitionStyle(property = 'all', duration = AnimationDuration.NORMAL, easing = EasingType.EASE) {
  return `${property} ${duration}ms ${easing}`
}

/**
 * 获取动画关键帧样式
 * @param {string} animationName - 动画名称
 * @param {number} duration - 持续时间（毫秒）
 * @param {string} easing - 缓动函数
 * @param {number} delay - 延迟时间（毫秒）
 * @param {number} iterationCount - 迭代次数
 * @param {string} direction - 动画方向
 * @returns {string} 动画样式字符串
 */
export function getAnimationStyle(
  animationName,
  duration = AnimationDuration.NORMAL,
  easing = EasingType.EASE,
  delay = 0,
  iterationCount = 1,
  direction = 'normal'
) {
  return `${animationName} ${duration}ms ${easing} ${delay}ms ${iterationCount} ${direction}`
}

/**
 * 生成随机延迟
 * @param {number} min - 最小延迟（毫秒）
 * @param {number} max - 最大延迟（毫秒）
 * @returns {number} 随机延迟值
 */
export function getRandomDelay(min = 0, max = 500) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成随机持续时间
 * @param {number} min - 最小持续时间（毫秒）
 * @param {number} max - 最大持续时间（毫秒）
 * @returns {number} 随机持续时间
 */
export function getRandomDuration(min = AnimationDuration.FAST, max = AnimationDuration.SLOW) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成随机旋转角度
 * @param {number} min - 最小角度
 * @param {number} max - 最大角度
 * @returns {number} 随机旋转角度
 */
export function getRandomRotation(min = -360, max = 360) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成随机缩放比例
 * @param {number} min - 最小缩放比例
 * @param {number} max - 最大缩放比例
 * @returns {number} 随机缩放比例
 */
export function getRandomScale(min = 0.8, max = 1.2) {
  return Math.random() * (max - min) + min
}

/**
 * 生成随机透明度
 * @param {number} min - 最小透明度
 * @param {number} max - 最大透明度
 * @returns {number} 随机透明度
 */
export function getRandomOpacity(min = 0.3, max = 1) {
  return Math.random() * (max - min) + min
}

/**
 * 生成随机颜色
 * @returns {string} 随机颜色（HSL格式）
 */
export function getRandomColor() {
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 30) + 70
  const lightness = Math.floor(Math.random() * 20) + 60
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

/**
 * 生成随机渐变色
 * @returns {string} 随机渐变色
 */
export function getRandomGradient() {
  const color1 = getRandomColor()
  const color2 = getRandomColor()
  const angle = Math.floor(Math.random() * 360)
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`
}

/**
 * 计算两点之间的距离
 * @param {number} x1 - 第一个点的X坐标
 * @param {number} y1 - 第一个点的Y坐标
 * @param {number} x2 - 第二个点的X坐标
 * @param {number} y2 - 第二个点的Y坐标
 * @returns {number} 两点之间的距离
 */
export function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

/**
 * 计算两点之间的角度
 * @param {number} x1 - 第一个点的X坐标
 * @param {number} y1 - 第一个点的Y坐标
 * @param {number} x2 - 第二个点的X坐标
 * @param {number} y2 - 第二个点的Y坐标
 * @returns {number} 两点之间的角度（弧度）
 */
export function getAngle(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1)
}

/**
 * 将角度转换为弧度
 * @param {number} degrees - 角度
 * @returns {number} 弧度
 */
export function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180)
}

/**
 * 将弧度转换为角度
 * @param {number} radians - 弧度
 * @returns {number} 角度
 */
export function radiansToDegrees(radians) {
  return radians * (180 / Math.PI)
}

/**
 * 限制数值在指定范围内
 * @param {number} value - 要限制的值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 限制后的值
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * 线性插值
 * @param {number} start - 起始值
 * @param {number} end - 结束值
 * @param {number} t - 插值因子（0-1）
 * @returns {number} 插值结果
 */
export function lerp(start, end, t) {
  return start + (end - start) * t
}

/**
 * 缓动函数：easeInOutQuad
 * @param {number} t - 时间因子（0-1）
 * @returns {number} 缓动后的值
 */
export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

/**
 * 缓动函数：easeOutBounce
 * @param {number} t - 时间因子（0-1）
 * @returns {number} 缓动后的值
 */
export function easeOutBounce(t) {
  const n1 = 7.5625
  const d1 = 2.75
  
  if (t < 1 / d1) {
    return n1 * t * t
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375
  }
}

/**
 * 缓动函数：easeOutElastic
 * @param {number} t - 时间因子（0-1）
 * @returns {number} 缓动后的值
 */
export function easeOutElastic(t) {
  const c4 = (2 * Math.PI) / 3
  
  return t === 0
    ? 0
    : t === 1
    ? 1
    : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
}

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 节流后的函数
 */
export function throttle(func, delay) {
  let lastCall = 0
  return function(...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      return func.apply(this, args)
    }
  }
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
export function debounce(func, delay) {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 请求动画帧封装
 * @param {Function} callback - 回调函数
 * @returns {number} 动画帧ID
 */
export function requestAnimationFrame(callback) {
  return window.requestAnimationFrame(callback)
}

/**
 * 取消动画帧
 * @param {number} id - 动画帧ID
 */
export function cancelAnimationFrame(id) {
  window.cancelAnimationFrame(id)
}
