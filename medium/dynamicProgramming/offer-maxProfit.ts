// 剑指 Offer 63. 股票的最大利润
// https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/

function maxProfit(prices: number[]): number {
  let ans = 0
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    ans = Math.max(ans, prices[i] - min)
    if (prices[i] < min) {
      min = prices[i]
    }
  }
  return ans
};

maxProfit([7,1,5,3,6,4])
