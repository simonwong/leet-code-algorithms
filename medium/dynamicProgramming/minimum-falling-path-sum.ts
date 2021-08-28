// 931. 下降路径最小和
// https://leetcode-cn.com/problems/minimum-falling-path-sum/

function minFallingPathSum(matrix: number[][]): number {
  let dp: number[] = [Number.MAX_SAFE_INTEGER, ...matrix[0], Number.MAX_SAFE_INTEGER]

  for (let i = 1; i < matrix.length; i++) {
    let nextDp = [Number.MAX_SAFE_INTEGER, ...matrix[i], Number.MAX_SAFE_INTEGER]

    for (let j = 1; j < nextDp.length - 1; j++) {
      nextDp[j] = matrix[i][j - 1] + Math.min(
        dp[j - 1],
        dp[j],
        dp[j + 1],
      )
    }

    dp = nextDp
  }
  return Math.min(...dp)
};

minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])
