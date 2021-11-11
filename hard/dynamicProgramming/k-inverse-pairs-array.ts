// 629. K个逆序对数组
// https://leetcode-cn.com/problems/k-inverse-pairs-array/

// base case
// dp[n][0] = 1

// 状态转移方程
// dp[n][k] = dp[n][k-1] - dp[n-1][n-k] + dp[n-1][k]

function kInversePairs(n: number, k: number): number {
  const mod = 1000000007
  const dp: number[][] = new Array(2).fill(0).map(() => new Array(k + 1).fill(0))

  dp[0][0] = 1

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= k; ++j) {
      const cur = i & 1
      const prev = cur ^ 1

      dp[cur][j] = (j - 1 >= 0 ? dp[cur][j-1] : 0) - (j - i >= 0 ? dp[prev][j - i] : 0) + dp[prev][j]

      if (dp[cur][j] >= mod) {
        dp[cur][j] -= mod
      } else if (dp[cur][j] < 0) {
        dp[cur][j] += mod
      }
    }
  }

  return dp[n & 1][k]
};
