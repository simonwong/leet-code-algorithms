// 120. 三角形最小路径和
// https://leetcode-cn.com/problems/triangle/
function minimumTotal(triangle: number[][]): number {
  let dp: number[] = [...triangle[0]]

  for (let i = 1; i < triangle.length; i++) {
    let nextDp = [...triangle[i]]

    for (let j = 0; j < nextDp.length; j++) {
      let min = Number.MAX_SAFE_INTEGER
      if (dp[j] != null) {
        min = Math.min(min, triangle[i][j] + dp[j])
      }
      if (j > 0) {
        min = Math.min(min, triangle[i][j] + dp[j - 1])
      }
      nextDp[j] = min
    }
    dp = nextDp
  }
  return Math.min(...dp)
};

minimumTotal([
  [7],
  [-5,9],
  [6,5,2],
  [-8,-2,-7,3],
  [-2,6,-6,-1,4]
])
