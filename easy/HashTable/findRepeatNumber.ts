// 剑指 Offer 03. 数组中重复的数字
// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
function findRepeatNumber(nums: number[]): number {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
      i++
      continue
    }
    if (nums[nums[i]] === nums[i]) {
      return nums[i]
    }
    // swap
    const temp = nums[nums[i]]
    nums[nums[i]] = nums[i]
    nums[i] = temp
  }
  return -1
};
// function findRepeatNumber(nums: number[]): number {
//   const numObj = {}
//   for (const n of nums) {
//     numObj[n] = numObj[n] ? numObj[n] + 1 : 1
//     if (numObj[n] > 1) {
//       return n
//     }
//   }
//   return -1
// };
