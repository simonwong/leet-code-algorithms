// 518. 零钱兑换 II
// https://leetcode-cn.com/problems/coin-change-2/

// dp[i] 表示  i 金额，最多可以兑换的组合

// base case dp[0] = 1

// dp[i] = {
  // +=dp[i-coin]
// }

function change(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let j = 0; j < coins.length; j++) {
    const coin = coins[j]
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
};

change(5, [1,2,5])
