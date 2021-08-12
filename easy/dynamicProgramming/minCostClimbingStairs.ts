// 746. 使用最小花费爬楼梯
// https://leetcode-cn.com/problems/min-cost-climbing-stairs/

// 选择走 1 2
// dp[i] 走到第 i 个阶梯，最少花多少体力。
// base case dp[0] = 0; dp[1] = cost[0]; dp[2] = min(cost[0], cost[1])
// dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
function minCostClimbingStairs(cost: number[]): number {
  cost.push(0)
  const n = cost.length
  const dp: number[] = []
  dp[0] = 0
  dp[1] = 0
  dp[2] = Math.min(cost[0], cost[1])

  for (let i = 3; i < n; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
  }
  return dp[n - 1]
};
