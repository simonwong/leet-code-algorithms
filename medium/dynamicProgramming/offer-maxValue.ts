// 剑指 Offer 47. 礼物的最大价值
// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/

// 状态定义：dp[i][j] 为 grid[i][j] 中可拿的最大值
// 状态转移 dp[i][j] = max(dp[i][j-1], dp[i-1][j]) + grid[i][j]
// base: dp[0][j] = 0; dp[i][j] = 0
function maxValue(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(
        dp[i-1][j],
        dp[i][j-1],
      ) + grid[i-1][j-1]
    }
  }
  return dp[m][n]
};
