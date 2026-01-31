/**
 * 夸奖常迦悦的数据集合
 * 主题：考研、大学生、努力、坚持、优秀
 */

// 夸奖内容分类
const PRAISE_CATEGORIES = {
  STUDY: 'study',        // 学习相关
  PERSONALITY: 'personality',  // 性格相关
  FUTURE: 'future',      // 未来展望
  ENCOURAGEMENT: 'encouragement',  // 鼓励
  SPECIAL: 'special'     // 特别夸奖
}

// 夸奖内容数据
const praiseData = [
  // 学习相关
  {
    id: 1,
    category: PRAISE_CATEGORIES.STUDY,
    title: '勤奋的学习者',
    content: '常迦悦，你每天坚持学习，这种自律的精神真的让人佩服！考研路上，你是最棒的！',
    icon: '📚'
  },
  {
    id: 2,
    category: PRAISE_CATEGORIES.STUDY,
    title: '知识的追求者',
    content: '你对知识的渴望和追求，让你在考研的道路上闪闪发光。相信你一定能考上理想的学校！',
    icon: '✨'
  },
  {
    id: 3,
    category: PRAISE_CATEGORIES.STUDY,
    title: '专注的你',
    content: '当你沉浸在书本中时，那种专注的样子最美了。常迦悦，你的努力不会白费！',
    icon: '🎯'
  },
  {
    id: 4,
    category: PRAISE_CATEGORIES.STUDY,
    title: '笔记达人',
    content: '你的笔记总是那么清晰、有条理，这种认真的态度是你成功的关键！',
    icon: '📝'
  },
  {
    id: 5,
    category: PRAISE_CATEGORIES.STUDY,
    title: '解题高手',
    content: '面对难题，你从不退缩，总能找到解决方法。常迦悦，你真的很聪明！',
    icon: '💡'
  },
  {
    id: 21,
    category: PRAISE_CATEGORIES.STUDY,
    title: '时间管理大师',
    content: '你总能合理安排时间，学习效率超高。常迦悦，你的时间管理能力让人惊叹！',
    icon: '⏰'
  },
  {
    id: 22,
    category: PRAISE_CATEGORIES.STUDY,
    title: '阅读达人',
    content: '你阅读的速度和理解能力都很强，这是考研的重要优势！',
    icon: '📖'
  },
  {
    id: 23,
    category: PRAISE_CATEGORIES.STUDY,
    title: '逻辑思维强',
    content: '你的逻辑思维能力很强，分析问题总是那么透彻。常迦悦，你太厉害了！',
    icon: '🧠'
  },
  {
    id: 24,
    category: PRAISE_CATEGORIES.STUDY,
    title: '记忆力超群',
    content: '你的记忆力真的很棒，背书效率高。常迦悦，这是你的天赋！',
    icon: '🎯'
  },
  {
    id: 25,
    category: PRAISE_CATEGORIES.STUDY,
    title: '学习方法好',
    content: '你有一套自己的学习方法，效率高效果好。常迦悦，你很会学习！',
    icon: '📊'
  },
  {
    id: 26,
    category: PRAISE_CATEGORIES.STUDY,
    title: '英语学霸',
    content: '你的英语水平很高，词汇量丰富，阅读速度快。考研英语对你来说小菜一碟！',
    icon: '🔤'
  },
  {
    id: 27,
    category: PRAISE_CATEGORIES.STUDY,
    title: '数学高手',
    content: '你的数学思维很敏捷，解题思路清晰。常迦悦，数学对你来说很简单！',
    icon: '➗'
  },
  {
    id: 28,
    category: PRAISE_CATEGORIES.STUDY,
    title: '专业课强',
    content: '你对专业课的理解很深入，知识点掌握得很牢固。常迦悦，你一定能考高分！',
    icon: '📋'
  },
  {
    id: 29,
    category: PRAISE_CATEGORIES.STUDY,
    title: '学习计划周密',
    content: '你的学习计划总是那么周密，执行力也很强。常迦悦，你很有规划！',
    icon: '📅'
  },
  {
    id: 30,
    category: PRAISE_CATEGORIES.STUDY,
    title: '知识面广',
    content: '你的知识面很广，不仅专业学得好，其他领域也涉猎很多。常迦悦，你博学多才！',
    icon: '🌍'
  },
  {
    id: 71,
    category: PRAISE_CATEGORIES.STUDY,
    title: '自律达人',
    content: '你的自律能力超强，每天都能按时完成学习任务。常迦悦，你太厉害了！',
    icon: '⏱️'
  },
  {
    id: 72,
    category: PRAISE_CATEGORIES.STUDY,
    title: '学习效率高',
    content: '你的学习效率真的很高，同样的时间你能学到更多。常迦悦，你很高效！',
    icon: '⚡'
  },
  {
    id: 73,
    category: PRAISE_CATEGORIES.STUDY,
    title: '理解能力强',
    content: '你对新知识的理解能力很强，一点就通。常迦悦，你很聪明！',
    icon: '💭'
  },
  {
    id: 74,
    category: PRAISE_CATEGORIES.STUDY,
    title: '总结能力强',
    content: '你总能很好地总结知识点，形成自己的知识体系。常迦悦，你很会学习！',
    icon: '📑'
  },
  {
    id: 75,
    category: PRAISE_CATEGORIES.STUDY,
    title: '学习态度端正',
    content: '你的学习态度非常端正，从不敷衍了事。常迦悦，你很认真！',
    icon: '📌'
  },
  
  // 性格相关
  {
    id: 6,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '坚强的女孩',
    content: '考研路上有困难，但你从不放弃。常迦悦，你的坚强让人感动！',
    icon: '💪'
  },
  {
    id: 7,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '乐观向上',
    content: '即使压力大，你依然保持乐观。这种积极的心态是你最大的财富！',
    icon: '😊'
  },
  {
    id: 8,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '温柔善良',
    content: '你不仅学习好，还那么温柔善良。常迦悦，你是一个完美的女孩！',
    icon: '🌸'
  },
  {
    id: 9,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有毅力',
    content: '从决定考研到现在，你一直坚持着。这份毅力，值得所有人学习！',
    icon: '🔥'
  },
  {
    id: 10,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有梦想',
    content: '你有明确的目标和梦想，并且为之努力。常迦悦，你是最有魅力的！',
    icon: '⭐'
  },
  {
    id: 31,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '自信满满',
    content: '你总是那么自信，相信自己能行。这种自信感染力很强！',
    icon: '😎'
  },
  {
    id: 32,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '独立自主',
    content: '你很独立，能够自主安排学习和生活。常迦悦，你很成熟！',
    icon: '🦋'
  },
  {
    id: 33,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有耐心',
    content: '学习需要耐心，你总是那么有耐心，不急不躁。常迦悦，你很稳重！',
    icon: '🧘'
  },
  {
    id: 34,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '细心认真',
    content: '你做事很细心，学习也很认真。这种态度让你少走很多弯路！',
    icon: '🔍'
  },
  {
    id: 35,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有责任心',
    content: '你对学习很有责任心，从不敷衍了事。常迦悦，你很靠谱！',
    icon: '💼'
  },
  {
    id: 36,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '善于反思',
    content: '你经常反思自己的学习方法，不断改进。常迦悦，你很聪明！',
    icon: '🤔'
  },
  {
    id: 37,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '乐于助人',
    content: '你不仅自己学习好，还乐于帮助同学。常迦悦，你很善良！',
    icon: '🤝'
  },
  {
    id: 38,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有幽默感',
    content: '你很有幽默感，学习压力大时总能调节气氛。常迦悦，你很有趣！',
    icon: '😄'
  },
  {
    id: 39,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有创造力',
    content: '你的思维很活跃，总能想到新的学习方法。常迦悦，你很有创意！',
    icon: '🎨'
  },
  {
    id: 40,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '有韧性',
    content: '遇到挫折你总能很快调整过来，继续前进。常迦悦，你很坚强！',
    icon: '🌱'
  },
  {
    id: 76,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '勇敢无畏',
    content: '你面对困难从不退缩，总是勇敢地迎难而上。常迦悦，你很勇敢！',
    icon: '🦁'
  },
  {
    id: 77,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '内心强大',
    content: '你的内心非常强大，能够承受各种压力。常迦悦，你很了不起！',
    icon: '💎'
  },
  {
    id: 78,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '积极进取',
    content: '你总是积极进取，从不满足于现状。常迦悦，你很有上进心！',
    icon: '📈'
  },
  {
    id: 79,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '懂得感恩',
    content: '你懂得感恩，珍惜身边的人和事。常迦悦，你很温暖！',
    icon: '🙏'
  },
  {
    id: 80,
    category: PRAISE_CATEGORIES.PERSONALITY,
    title: '真诚待人',
    content: '你待人真诚，从不虚伪。常迦悦，你很真实！',
    icon: '💖'
  },
  
  // 未来展望
  {
    id: 11,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '未来的研究生',
    content: '相信不久的将来，你就是一名优秀的研究生了！加油，常迦悦！',
    icon: '🎓'
  },
  {
    id: 12,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '前程似锦',
    content: '你的未来一定会像你的名字一样，充满喜悦和美好！',
    icon: '🌈'
  },
  {
    id: 13,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '学术新星',
    content: '以你的努力和天赋，未来一定能在学术领域发光发热！',
    icon: '🌟'
  },
  {
    id: 14,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '人生赢家',
    content: '考研只是你人生的一个起点，常迦悦，你会成为人生的赢家！',
    icon: '🏆'
  },
  {
    id: 15,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '无限可能',
    content: '你的潜力无限，未来有无限可能等着你去探索！',
    icon: '🚀'
  },
  {
    id: 41,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '梦想成真',
    content: '你的梦想一定会实现，考研成功只是开始！常迦悦，未来可期！',
    icon: '🌠'
  },
  {
    id: 42,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '事业有成',
    content: '以你的能力，未来一定会在事业上取得巨大成功！',
    icon: '💼'
  },
  {
    id: 43,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '人生精彩',
    content: '你的人生一定会很精彩，充满各种美好的经历！',
    icon: '🎭'
  },
  {
    id: 44,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '幸福美满',
    content: '你一定会拥有幸福美满的生活，这是你应得的！',
    icon: '💕'
  },
  {
    id: 45,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '光芒万丈',
    content: '未来你一定会光芒万丈，成为众人瞩目的焦点！',
    icon: '☀️'
  },
  {
    id: 46,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '成就非凡',
    content: '你一定会成就非凡的事业，成为行业的佼佼者！',
    icon: '🏅'
  },
  {
    id: 47,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '人生赢家',
    content: '你会在人生的各个领域都取得成功，成为真正的人生赢家！',
    icon: '👑'
  },
  {
    id: 48,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '精彩人生',
    content: '你的人生一定会很精彩，充满惊喜和感动！',
    icon: '🎪'
  },
  {
    id: 49,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '美好明天',
    content: '明天会更好，你的未来一定会更加美好！',
    icon: '🌅'
  },
  {
    id: 50,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '梦想起航',
    content: '考研成功后，你的梦想将正式起航！常迦悦，加油！',
    icon: '⛵'
  },
  {
    id: 81,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '未来可期',
    content: '你的未来充满希望，一切都会越来越好！',
    icon: '🌠'
  },
  {
    id: 82,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '光明前途',
    content: '你的前途一片光明，未来一定会更加辉煌！',
    icon: '🌟'
  },
  {
    id: 83,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '锦绣前程',
    content: '你的前程如锦绣般美好，未来一定会更加精彩！',
    icon: '🎨'
  },
  {
    id: 84,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '大展宏图',
    content: '未来你一定会大展宏图，实现自己的所有梦想！',
    icon: '🏰'
  },
  {
    id: 85,
    category: PRAISE_CATEGORIES.FUTURE,
    title: '飞黄腾达',
    content: '你一定会飞黄腾达，成为众人羡慕的对象！',
    icon: '🦅'
  },
  
  // 鼓励
  {
    id: 16,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '继续加油',
    content: '常迦悦，你已经做得很好了，继续加油，成功就在前方！',
    icon: '💪'
  },
  {
    id: 17,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '相信自己',
    content: '相信自己，你是最棒的！所有的努力都会有回报！',
    icon: '❤️'
  },
  {
    id: 18,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '不要放弃',
    content: '无论遇到什么困难，都不要放弃。常迦悦，我们都在支持你！',
    icon: '🤝'
  },
  {
    id: 19,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你值得',
    content: '你值得拥有最好的一切，包括理想的研究生录取通知书！',
    icon: '🎁'
  },
  {
    id: 20,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '为你骄傲',
    content: '常迦悦，我们为你骄傲！你是最优秀的考研战士！',
    icon: '👏'
  },
  {
    id: 51,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '坚持到底',
    content: '坚持就是胜利，常迦悦，你一定能坚持到底！',
    icon: '🏁'
  },
  {
    id: 52,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '勇往直前',
    content: '勇敢地向前走吧，常迦悦，你的未来在等着你！',
    icon: '🏃'
  },
  {
    id: 53,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '永不言败',
    content: '即使失败也不怕，常迦悦，你永远不会被打败！',
    icon: '🛡️'
  },
  {
    id: 54,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你是最棒的',
    content: '常迦悦，你是最棒的，没有人比你更优秀！',
    icon: '🌟'
  },
  {
    id: 55,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '胜利在望',
    content: '胜利就在眼前，常迦悦，你一定能成功！',
    icon: '🎯'
  },
  {
    id: 56,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '再接再厉',
    content: '继续努力，常迦悦，你离成功越来越近了！',
    icon: '📈'
  },
  {
    id: 57,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你很优秀',
    content: '常迦悦，你真的很优秀，不要怀疑自己！',
    icon: '✨'
  },
  {
    id: 58,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '加油加油',
    content: '加油加油，常迦悦，你一定可以的！',
    icon: '🔥'
  },
  {
    id: 59,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '相信自己',
    content: '相信自己的能力，常迦悦，你一定能行！',
    icon: '💪'
  },
  {
    id: 60,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '未来可期',
    content: '你的未来充满希望，常迦悦，加油向前冲！',
    icon: '🌈'
  },
  {
    id: 61,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '努力值得',
    content: '你的努力一定值得，常迦悦，不要放弃！',
    icon: '💎'
  },
  {
    id: 62,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '成功在即',
    content: '成功就在眼前，常迦悦，坚持住！',
    icon: '🏆'
  },
  {
    id: 63,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你很棒',
    content: '常迦悦，你真的很棒，为你点赞！',
    icon: '👍'
  },
  {
    id: 64,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '继续努力',
    content: '继续努力，常迦悦，你的付出会有回报！',
    icon: '🌟'
  },
  {
    id: 65,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你很厉害',
    content: '常迦悦，你真的很厉害，什么困难都难不倒你！',
    icon: '💪'
  },
  {
    id: 66,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '梦想成真',
    content: '你的梦想一定会成真，常迦悦，加油！',
    icon: '✨'
  },
  {
    id: 67,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你很坚强',
    content: '常迦悦，你很坚强，什么困难都能克服！',
    icon: '🛡️'
  },
  {
    id: 68,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '继续前行',
    content: '继续前行，常迦悦，成功在等着你！',
    icon: '🚀'
  },
  {
    id: 69,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你很优秀',
    content: '常迦悦，你很优秀，不要怀疑自己！',
    icon: '⭐'
  },
  {
    id: 70,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '胜利属于你',
    content: '胜利一定属于你，常迦悦，加油！',
    icon: '🏆'
  },
  {
    id: 86,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '冲鸭冲鸭',
    content: '冲鸭冲鸭，常迦悦，你一定可以的！',
    icon: '🦆'
  },
  {
    id: 87,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '加油必胜',
    content: '加油必胜，常迦悦，你是最棒的！',
    icon: '🎖️'
  },
  {
    id: 88,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '坚持就是胜利',
    content: '坚持就是胜利，常迦悦，你一定能成功！',
    icon: '🏅'
  },
  {
    id: 89,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '你是最美的',
    content: '常迦悦，你是最美的，内外兼修！',
    icon: '🌹'
  },
  {
    id: 90,
    category: PRAISE_CATEGORIES.ENCOURAGEMENT,
    title: '未来光明',
    content: '你的未来一片光明，常迦悦，加油！',
    icon: '🌞'
  },
  
  // 特别夸奖
  {
    id: 91,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '独一无二的常迦悦',
    content: '常迦悦，你是独一无二的，没有人能替代你！',
    icon: '💎'
  },
  {
    id: 92,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '闪闪发光',
    content: '你就像一颗闪亮的星星，照亮了周围的一切！',
    icon: '⭐'
  },
  {
    id: 93,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '天使降临',
    content: '你就是天使降临人间，给所有人带来温暖和希望！',
    icon: '👼'
  },
  {
    id: 94,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '完美无缺',
    content: '你完美无缺，没有任何缺点！常迦悦，你是完美的！',
    icon: '🌟'
  },
  {
    id: 95,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '宇宙最强',
    content: '常迦悦，你是宇宙最强的考研战士！',
    icon: '🌌'
  },
  {
    id: 96,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '奇迹创造者',
    content: '你就是奇迹的创造者，一切不可能在你面前都会变成可能！',
    icon: '✨'
  },
  {
    id: 97,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '女神降临',
    content: '常迦悦，你就是女神降临，美丽与智慧并存！',
    icon: '👸'
  },
  {
    id: 98,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '超级英雄',
    content: '你就是超级英雄，拯救自己的未来！',
    icon: '🦸'
  },
  {
    id: 99,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '世界因你而美好',
    content: '世界因为有你而变得更加美好！',
    icon: '🌍'
  },
  {
    id: 100,
    category: PRAISE_CATEGORIES.SPECIAL,
    title: '你是我的骄傲',
    content: '常迦悦，你是我的骄傲，永远都是！',
    icon: '💖'
  }
]

// 随机获取一条夸奖
function getRandomPraise() {
  const randomIndex = Math.floor(Math.random() * praiseData.length)
  return praiseData[randomIndex]
}

// 根据分类获取夸奖
function getPraiseByCategory(category) {
  return praiseData.filter(item => item.category === category)
}

// 获取所有夸奖
function getAllPraises() {
  return praiseData
}

// 根据ID获取夸奖
function getPraiseById(id) {
  return praiseData.find(item => item.id === id)
}

export {
  praiseData,
  PRAISE_CATEGORIES,
  getRandomPraise,
  getPraiseByCategory,
  getAllPraises,
  getPraiseById
}
