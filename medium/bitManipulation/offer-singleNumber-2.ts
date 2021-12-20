// 剑指 Offer 56 - II. 数组中数字出现的次数 II
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
function singleNumber(nums: number[]): number {
  let a = 0
  let b = 0

  for (const n of nums) {
    a = (a ^ n) & ~b
    b = (b ^ n) & ~a
  }

  return a
};
