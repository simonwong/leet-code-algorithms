// 55. 跳跃游戏
// https://leetcode-cn.com/problems/jump-game/

// 状态选择：跳当前位置 i 的 nums[i] 次
// dp[i] 表示在 nums[i] 位置能否到达
// base case: dp[nums.length - 1] = true
// result: dp[0]
function canJump(nums: number[]): boolean {
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false
    }
    max = Math.max(max, i + nums[i])
  }
  return true
};
// function canJump(nums: number[]): boolean {
//   const n = nums.length
//   const dp: boolean[] = new Array(n)
//   dp[n - 1] = true

//   for (let i = n - 2; i >= 0; i--) {
//     dp[i] = false
//     for (let j = 1; j <= nums[i]; j++) {
//       if (dp[i + j] && i + j <= n - 1) {
//         dp[i] = true
//       }
//     }
//   }
//   return dp[0]
// };

canJump([2,3,0,1,4])
