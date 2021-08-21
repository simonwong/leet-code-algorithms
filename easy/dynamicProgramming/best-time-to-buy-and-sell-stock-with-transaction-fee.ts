// 714. 买卖股票的最佳时机含手续费
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

// dp[i] 状态：买入、卖出、无操作（0未持有 1 持有）
// dp[i][0] = 0
// dp[i][1] = -min

// dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
// dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])

function maxProfitIIII(prices: number[], fee: number): number {
  let dp_0 = 0
  let dp_1 = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    const nextDp_0 = Math.max(dp_0, dp_1 + prices[i] - fee)
    const nextDp_1 = Math.max(dp_1, dp_0 - prices[i])
    dp_0 = nextDp_0
    dp_1 = nextDp_1
  }
  return dp_0
};
