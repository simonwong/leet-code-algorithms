// 剑指 Offer 60. n个骰子的点数
// https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/
function dicesProbability(n: number): number[] {
  let dp: number[] = new Array(6).fill(1 / 6)

  for (let i = 2; i <= n; i++) {
    const temp: number[] = new Array(i * 5 + 1).fill(0)
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += dp[j] / 6
      }
    }
    dp = temp
  }
  return dp
};
dicesProbability(2)
