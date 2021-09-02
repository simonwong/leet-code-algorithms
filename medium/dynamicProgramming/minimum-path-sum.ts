// 64. 最小路径和
// https://leetcode-cn.com/problems/minimum-path-sum/
function minPathSum(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const dp: number[][] = new Array(m).fill([]).map(item => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j - 1 < 0 && i - 1 < 0) {
        dp[i][j] = grid[i][j]
      } else if (j - 1 < 0) {
        dp[i][j] = dp[i-1][j] + grid[i][j]
      } else if (i - 1 < 0) {
        dp[i][j] = dp[i][j-1] + grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
      }
    }
  }
  return dp[m-1][n-1]
};
minPathSum([[1,3,1],[1,5,1],[4,2,1]])
