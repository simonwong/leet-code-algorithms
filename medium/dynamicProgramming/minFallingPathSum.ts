// 931. 下降路径最小和
// https://leetcode-cn.com/problems/minimum-falling-path-sum/
function minFallingPathSum(matrix: number[][]): number {
  const dp: number[][] = []
  let maxNumber = Number.MAX_SAFE_INTEGER
  dp[0] = [maxNumber, ...matrix[0], maxNumber]

  for (let i = 1; i < matrix.length; i++) {
    const row = matrix[i]
    dp[i] = Array(row.length + 2)
    dp[i][0] = maxNumber
    dp[i][row.length + 1] = maxNumber

    for (let j = 0; j < row.length; j++) {
      dp[i][j+1] = Math.min(
        dp[i-1][j],
        dp[i-1][j+1],
        dp[i-1][j+2],
      ) + row[j]
    }
  }

  return Math.min(...dp[dp.length - 1])
};
