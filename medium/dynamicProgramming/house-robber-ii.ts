// 213. 打家劫舍 II
// https://leetcode-cn.com/problems/house-robber-ii/

/**
 * 选择：偷/不偷
 *
 * dp[i][k] i 个屋子，最多偷多少； k 表示[1]偷和[0]不偷
 *
 * base:
 *  dp[1][0] = 0
 *  dp[1][1] = nums[0]
 *
 *  dp[2][0] = nums[0]
 *  dp[2][1] = nums[1]
 *
 * dp[i][0] = dp[i-1][1]
 * dp[i][1] = dp[i-1][0] + nums[i-1]
 */
function robBase(nums: number[]): number {
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

function robii(nums: number[]): number {
  if (nums.length <= 1) return nums[0] || 0
  return Math.max(
    robBase(nums.slice(1)),
    robBase(nums.slice(0, -1)),
  )
};
