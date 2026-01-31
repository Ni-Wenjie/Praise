import { ref, computed } from 'vue'

/**
 * 彩蛋系统
 * 提供普通彩蛋和超级彩蛋功能
 */
export function useEasterEggSystem(praiseData) {
  // 彩蛋消息
  const surpriseMessage = ref('')
  
  // 是否显示彩蛋
  const showSurprise = ref(false)
  
  // 是否显示超级彩蛋
  const showSuperEgg = ref(false)
  
  // 点击计数
  const clickCount = ref(0)
  
  // 点击计时器
  let clickTimer = null
  
  // 彩蛋显示计时器
  let surpriseTimer = null
  let superEggTimer = null
  
  // 彩蛋消息列表
  const surpriseMessages = [
    '🎉 常迦悦，你是独一无二的！',
    '✨ 你的努力终将闪耀！',
    '💖 考研路上，你不是一个人在战斗！',
    '🌟 相信自己，你一定可以！',
    '🎊 每一天都是新的开始！',
    '💕 你的坚持令人感动！',
    '🌈 彩虹总在风雨后！',
    '⭐ 你是最棒的！',
    '🎁 坚持就是胜利！',
    '💗 未来可期，加油！'
  ]
  
  // 超级彩蛋消息
  const superEggMessages = [
    '🎉🎉🎉 常迦悦，你是最棒的！🎉🎉🎉',
    '✨✨✨ 考研必胜！✨✨✨',
    '💖💖💖 你一定能成功！💖💖💖',
    '🌟🌟🌟 加油！加油！加油！🌟🌟🌟',
    '🎊🎊🎊 坚持到底就是胜利！🎊🎊🎊'
  ]
  
  /**
   * 触发普通彩蛋
   * 随机显示一条彩蛋消息
   */
  function triggerSurprise() {
    // 随机选择一条消息
    const randomIndex = Math.floor(Math.random() * surpriseMessages.length)
    surpriseMessage.value = surpriseMessages[randomIndex]
    
    // 显示彩蛋
    showSurprise.value = true
    
    // 3秒后隐藏彩蛋
    if (surpriseTimer) {
      clearTimeout(surpriseTimer)
    }
    surpriseTimer = setTimeout(() => {
      showSurprise.value = false
    }, 3000)
  }
  
  /**
   * 触发超级彩蛋
   * 显示超级彩蛋消息和动画
   */
  function triggerSuperEgg() {
    // 随机选择一条超级彩蛋消息
    const randomIndex = Math.floor(Math.random() * superEggMessages.length)
    surpriseMessage.value = superEggMessages[randomIndex]
    
    // 显示超级彩蛋
    showSuperEgg.value = true
    
    // 5秒后隐藏超级彩蛋
    if (superEggTimer) {
      clearTimeout(superEggTimer)
    }
    superEggTimer = setTimeout(() => {
      showSuperEgg.value = false
    }, 5000)
    
    // 重置点击计数
    clickCount.value = 0
  }
  
  /**
   * 处理点击事件
   * 检测是否触发超级彩蛋
   * @param {Function} onSuperExplosion - 触发超级爆炸的回调函数
   */
  function handleClick(onSuperExplosion) {
    // 增加点击计数
    clickCount.value++
    
    // 清除之前的计时器
    if (clickTimer) {
      clearTimeout(clickTimer)
    }
    
    // 1秒后重置点击计数
    clickTimer = setTimeout(() => {
      clickCount.value = 0
    }, 1000)
    
    // 如果点击次数达到5次，触发超级彩蛋
    if (clickCount.value >= 5) {
      triggerSuperEgg()
      if (onSuperExplosion) {
        onSuperExplosion()
      }
    }
  }
  
  /**
   * 获取随机夸奖
   * @returns {Object} 随机夸奖对象
   */
  function getRandomPraise() {
    const randomIndex = Math.floor(Math.random() * praiseData.length)
    return praiseData[randomIndex]
  }
  
  /**
   * 获取指定分类的随机夸奖
   * @param {string} category - 分类名称
   * @returns {Object} 随机夸奖对象
   */
  function getPraiseByCategory(category) {
    const filteredPraises = praiseData.filter(item => item.category === category)
    if (filteredPraises.length === 0) {
      return getRandomPraise()
    }
    const randomIndex = Math.floor(Math.random() * filteredPraises.length)
    return filteredPraises[randomIndex]
  }
  
  /**
   * 获取分类统计信息
   * @returns {Object} 各分类的夸奖数量
   */
  const categoryStats = computed(() => {
    const stats = {}
    praiseData.forEach(item => {
      stats[item.category] = (stats[item.category] || 0) + 1
    })
    return stats
  })
  
  /**
   * 清理彩蛋系统
   * 清除所有计时器
   */
  function cleanupEasterEggSystem() {
    if (clickTimer) {
      clearTimeout(clickTimer)
      clickTimer = null
    }
    if (surpriseTimer) {
      clearTimeout(surpriseTimer)
      surpriseTimer = null
    }
    if (superEggTimer) {
      clearTimeout(superEggTimer)
      superEggTimer = null
    }
    clickCount.value = 0
    showSurprise.value = false
    showSuperEgg.value = false
  }
  
  return {
    surpriseMessage,
    showSurprise,
    showSuperEgg,
    clickCount,
    categoryStats,
    triggerSurprise,
    triggerSuperEgg,
    handleClick,
    getRandomPraise,
    getPraiseByCategory,
    cleanupEasterEggSystem
  }
}
