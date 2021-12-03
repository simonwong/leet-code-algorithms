// 剑指 Offer 50. 第一个只出现一次的字符
// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
function firstUniqChar(s: string): string {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    obj[s.charAt(i)] = obj[s.charAt(i)] ? obj[s.charAt(i)] + 1 : 1
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s.charAt(i)] === 1) {
      return s.charAt(i)
    }
  }
  return ' '
};
