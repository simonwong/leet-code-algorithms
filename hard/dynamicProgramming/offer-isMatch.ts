// 剑指 Offer 19. 正则表达式匹配
// https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/

// dp[i][j] 表示 s[0..i-1] p[0..j]是否能被匹配

function isMatch(s: string, p: string): boolean {
  const m = s.length
  const n = p.length
  const dp: boolean[][] = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(false))

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // 空正则 base case
      if (j === 0) {
        dp[i][j] = i === 0
        continue
      }

      // * 匹配
      if (p[j-1] == '*') {
        if (j >= 2) {
          dp[i][j] = dp[i][j] || dp[i][j-2]
        }
        if (i >= 1 && j >= 2 && (
          s[i-1] === p[j-2] ||
          p[j-2] === '.'
        )) {
          dp[i][j] = dp[i][j] || dp[i-1][j]
        }
        continue
      }
      // 相等 或 .
      if (i > 0 && (s[i-1] === p[j-1] || p[j-1] === '.')) {
        dp[i][j] = dp[i-1][j-1]
      }
    }
  }
  return dp[m][n]
};
