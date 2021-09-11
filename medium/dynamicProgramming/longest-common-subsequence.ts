// 1143. 最长公共子序列
// https://leetcode-cn.com/problems/longest-common-subsequence/

// dp[i][j] i 表示text1 的位置，j 表示text2 的位置，他们之间的最长公共子序列
// base case
// dp[0][j]、dp[i][0] = 0

// 状态转移方程：dp[i][j] = {
// dp[i-1][j-1] + 1 (text[i] === text[j])
// max(dp[i][j-1], dp[i-1][j]) (text[i] !== text[j-1])
// }

function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length
  const n = text2.length

  const dp: number[][] = new Array(m+1).fill([]).map(() => new Array(n+1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(
          dp[i-1][j],
          dp[i][j-1]
        )
      }
    }
  }
  return dp[m][n]
};
