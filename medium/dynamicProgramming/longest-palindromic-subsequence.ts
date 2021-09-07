// 516. 最长回文子序列
// https://leetcode-cn.com/problems/longest-palindromic-subsequence/

// dp[i][j] i 到 j 位置最长回文子序列长度

// base case dp[i][i] = true

// dp[i][j] = dp[i+1][j-1] + 2
//          = max(dp[i+1][j], dp[i][j-1])

function longestPalindromeSubseq(s: string): number {
  const len = s.length

  const dp: number[][] = new Array(len)
    .fill([])
    .map(() => new Array(len).fill(0))

  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1
    const cur = s.charAt(i)
    for (let j = i + 1; j < len; j++) {
      const next = s.charAt(j)

      if (cur === next) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  }

  return dp[0][len - 1]
};
