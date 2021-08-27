// 118. 杨辉三角
// https://leetcode-cn.com/problems/pascals-triangle/
function generate(numRows: number): number[][] {
  const dp: number[][] = []
  dp[0] = [1]
  dp[1] = [1, 1]

  for (let i = 2; i < numRows; i++) {
    const row = i + 1
    dp[i] = new Array(row).fill(1)

    for (let j = 1; j < dp[i].length - 1; j++) {
      dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    }
  }
  return dp.slice(0, numRows)
};

console.log(generate(2))
