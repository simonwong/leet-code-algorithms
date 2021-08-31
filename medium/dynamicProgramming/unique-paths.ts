// 62. 不同路径
// https://leetcode-cn.com/problems/unique-paths/
function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) {
    return 1
  }

  const dp: number[][] = new Array(m).fill([]).map((_, index) => {
    const row = new Array(n).fill(index === m - 1 ? 1 : 0)
    row[n-1] = 1

    return row
  })

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i+1][j] + dp[i][j + 1]
    }
  }
  return dp[0][0]
};

uniquePaths(7, 3)
