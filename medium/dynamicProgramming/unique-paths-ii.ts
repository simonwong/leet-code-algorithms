// 63. 不同路径 II
// https://leetcode-cn.com/problems/unique-paths-ii/
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  const dp: number[] = new Array(n).fill(0)
  dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
        continue
      }
      if (j - 1 >= 0 && obstacleGrid[i][j-1] === 0) {
        dp[j] += dp[j-1]
      }
    }
  }
  return dp[n-1]
};

uniquePathsWithObstacles([[0,1]])
