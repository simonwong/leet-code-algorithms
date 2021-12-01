// 剑指 Offer 58 - II. 左旋转字符串
// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
function reverseLeftWords(s: string, n: number): string {
  const t = n % s.length
  return s.substring(t) + s.substring(0, t)
};
