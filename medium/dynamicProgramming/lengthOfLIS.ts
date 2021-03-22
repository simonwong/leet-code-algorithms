// 300. 最长递增子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 状态转移方程
// dp[i] = Max(dp[j] + 1), 其中 0 <= j < i 且 nums[j] > nums[i]

function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0

  const dp: number[] = Array(nums.length).fill(1)
  let ans: number = dp[0]
  for (let i = 1; i < nums.length; i++) {
    let j = 0
    while (j < i) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
      j++
    }
    ans = Math.max(ans, dp[i])
  }
  return ans
};

lengthOfLIS([0,1,0,3,2,3])
