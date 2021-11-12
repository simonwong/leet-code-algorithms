// 375. 猜数字大小 II
// https://leetcode-cn.com/problems/guess-number-higher-or-lower-ii/

// dp[i][j] 表示 i-j 范围内的最小金额

// base case
// dp[i][1] = 0

// 状态转移方程
// dp[i][j] = min { k + max(dp[i][k-1], dp[k+1][j]) }
//          i<=k<=j

// result
// dp[1][n]

function getMoneyAmount(n: number): number {
  const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = n - 1; i >= 1; --i) {
    for (let j = i + 1; j <= n; j++) {
      let min = Number.MAX_SAFE_INTEGER

      for (let k = i; k < j; k++) {
        const cost = k + Math.max(dp[i][k-1], dp[k+1][j])
        min = Math.min(min, cost)
      }

      dp[i][j] = min
    }
  }
  return dp[1][n]
};
