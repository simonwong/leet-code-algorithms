// 198. 打家劫舍
// https://leetcode-cn.com/problems/house-robber/

/**
 * 选择：偷/不偷
 *
 * dp[i] i 个屋子，最多偷多少
 *
 * base: dp[0] = 0; dp[1] = nums[0]; dp[2] = Math.max(nums[0], nums[1])
 *
 * dp[i] = Math.max(dp[i-2] + nums[i-1], d[i-1])
 */
function rob(nums: number[]): number {
  const n = nums.length
  if (n <= 1) {
    return nums[0] || 0
  }
  let dp_1 = nums[0]
  let dp_2 = Math.max(nums[0], nums[1])

  for (let i = 3; i <= n; i++) {
    const next = Math.max(dp_1 + nums[i - 1], dp_2)
    dp_1 = dp_2
    dp_2 = next
  }
  return dp_2
};

// function rob(nums: number[]): number {
//   const n = nums.length
//   if (n <= 1) {
//     return nums[0] || 0
//   }
//   const dp: number[] = new Array(n + 1)
//   dp[0] = 0
//   dp[1] = nums[0]
//   dp[2] = Math.max(nums[0], nums[1])

//   for (let i = 3; i <= n; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
//   }
//   return dp[n]
// };
