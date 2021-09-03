// 221. 最大正方形
// https://leetcode-cn.com/problems/maximal-square/
function maximalSquare(matrix: string[][]): number {
  const m = matrix.length
  const n = matrix[0].length
  let maxSide = 0
  const dp: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(
            dp[i-1][j],
            dp[i][j-1],
            dp[i-1][j-1],
          ) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }

  return maxSide * maxSide
};
