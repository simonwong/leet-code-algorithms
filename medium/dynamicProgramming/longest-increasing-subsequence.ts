// 300. 最长递增子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// dp[i] 在 i 这个位置的最长递增子序列
// base case
// dp[1] = 1
// 状态转移方程
// dp[i] = max(dp[i-1]) + 1, 满足条件 i > j >= 0 nums[i] > nums[j]

function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  const dp: number[] = new Array(n).fill(1)
  let ans = 1
  for (let i = 1; i < n; i++) {
    let maxPre = 0
    let j = i - 1
    for (; j >=0 ; j--) {
      if (nums[i] > nums[j]) {
        maxPre = Math.max(maxPre, dp[j])
      }
    }
    dp[i] = maxPre + 1
    ans = Math.max(dp[i], ans)
  }
  return ans
};

lengthOfLIS([1])
