// 309. 最佳买卖股票时机含冷冻期
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

// 当前状态：买入、卖出、无操作（0未持有、1持有、2冷冻期）
// dp[0][0] = 0
// dp[0][1] = -Min
// dp[0][2] = 0

// dp[i][0] = max(dp[i-1][0], dp[i-1][2])
// dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
// dp[i][2] = max(dp[i-1][1] + prices[i])

function maxProfitIII(prices: number[]): number {
  let dp_0 = 0
  let dp_1 = Number.MIN_SAFE_INTEGER
  let dp_2 = 0

  for (let i = 0; i < prices.length; i++) {
    const nextDp_0 = Math.max(dp_0, dp_2)
    const nextDp_1 = Math.max(dp_1, dp_0 - prices[i])
    const nextDp_2 = dp_1 + prices[i]

    dp_0 = nextDp_0
    dp_1 = nextDp_1
    dp_2 = nextDp_2
  }

  return Math.max(dp_0, dp_2)
};
