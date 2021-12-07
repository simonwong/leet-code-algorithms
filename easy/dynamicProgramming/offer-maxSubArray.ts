// 剑指 Offer 42. 连续子数组的最大和
// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

/**
 * 状态定义：dp[i] 表示以 nums[i] 为结尾时的连续子数组最大和
 * 状态转移方程： dp[i] = max(dp[i-1] + nums[i], nums[i]) （必须包括 nums[i]，所以不能单单是 dp[i-1]）
 * base case: dp[0] = nums[0]
 * return max(...dp)
 */
function maxSubArray(nums: number[]): number {
  let dp_0 = nums[0]
  let ans = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp_0 = Math.max(
      nums[i],
      dp_0 + nums[i]
    )
    ans = Math.max(ans, dp_0)
  }
  return ans
};
