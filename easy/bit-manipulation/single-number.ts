// 136. 只出现一次的数字
// https://leetcode-cn.com/problems/single-number/
function singleNumber(nums: number[]): number {
  let ans = 0
  for (const n of nums) {
    ans ^= n
  }
  return ans
};
