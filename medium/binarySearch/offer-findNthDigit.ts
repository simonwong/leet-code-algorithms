// 剑指 Offer 44. 数字序列中某一位的数字
// https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
function findNthDigit(n: number): number {
  let digit = 1
  let start = 1
  let count = 9
  while (n > count) {
      n -= count
      digit += 1
      start *= 10
      count = digit * start * 9
  }
  let num = start + (n - 1) / digit
  return Number(String(num).charAt((n - 1) % digit))
}
