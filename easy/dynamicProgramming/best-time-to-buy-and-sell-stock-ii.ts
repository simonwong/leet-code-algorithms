// 122. 买卖股票的最佳时机 II
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * 每天三种选择：买入 buy、卖出 sell、无操作 rest[1 持有， 0 未持有]
 * dp[i][k][0 / 1]
 * 0 <= i <= n - 1 （n 为交易天数
 * 1 <= k <= K  （K 为最多交易次数
 *
 * ```
 * for 0 <= i <= n-1
 *   for s in {0, 1}
 *     dp[i][k][s] = max(`buy`, `sell`, `rest`)
 * ```
 *
 * s === 0 未持有，则 dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
 *                                       rest 不操作，      已经卖了，那么增加利润
 * s === 1 持有，则 dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
 *                                     rest 不操作，        已经卖了，那么增加利润
 *
 * base case：
 * dp[0][0] = dp[i][0] = 0
 * dp[0][1] = dp[i][1] = -infinity
 *
 * 状态转移方程：
 * dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 * dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
 *
 * @param prices
 */
function maxProfitII(prices: number[]): number {
  const n = prices.length
  let dp_0 = 0
  let dp_1 = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < n; i++) {
    dp_0 = Math.max(
      dp_0,
      dp_1 + prices[i]
    )
    dp_1 = Math.max(
      dp_1,
      dp_0 - prices[i]
    )
  }
  return dp_0
};


// function maxProfit(prices: number[]): number {
//   const n = prices.length
//   const dp: number[][] = new Array(n + 1).fill([]).map(() => new Array(2).fill(0))
//   dp[0][0] = 0
//   dp[0][1] = Number.MIN_SAFE_INTEGER

//   for (let i = 0; i < n; i++) {
//     dp[i+1][0] = Math.max(
//       dp[i][0],
//       dp[i][1] + prices[i]
//     )
//     dp[i+1][1] = Math.max(
//       dp[i][1],
//       dp[i][0] - prices[i]
//     )
//   }
//   return dp[n][0]
// };

maxProfit([7,6,4,3,1])
