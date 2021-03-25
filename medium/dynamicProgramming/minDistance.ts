// 583. 两个字符串的删除操作
// https://leetcode-cn.com/problems/delete-operation-for-two-strings/
function minDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length
  const dp: number[][] = Array(m+1).fill(0).map(() => Array(n+1).fill(0))

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = i + j
      } else if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i-1][j],
          dp[i][j-1]
        )
      }
    }
  }
  return dp[m][n]
};

/**
 * lcs 解法
 */
// function minDistance(word1: string, word2: string): number {
//   const m = word1.length
//   const n = word2.length
//   const lcs = longestCommonSubsequence(word1, word2)
//   return m - lcs + n - lcs
// };
