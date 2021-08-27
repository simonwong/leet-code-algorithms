// 119. 杨辉三角 II
// https://leetcode-cn.com/problems/pascals-triangle-ii/
function getRow(rowIndex: number): number[] {
  let dp: number[] = [1]

  for (let i = 1; i <= rowIndex; i++) {
    const row = i + 1
    const nextDp = new Array(row).fill(1)

    for (let j = 1; j < nextDp.length - 1; j++) {
      nextDp[j] = dp[j-1] + dp[j]
    }
    dp = nextDp
  }
  return dp
};

console.log(getRow(23))
