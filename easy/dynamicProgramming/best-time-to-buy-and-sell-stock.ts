// 121. 买卖股票的最佳时机
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let buyMin = prices[0]
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    ans = Math.max(prices[i] - buyMin, ans)
    buyMin = Math.min(buyMin, prices[i])
  }
  return ans
};

maxProfit([7,1,5,3,6,4])
