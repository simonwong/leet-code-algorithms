// https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings/
// 712. 两个字符串的最小ASCII删除和
function minimumDeleteSum(s1: string, s2: string): number {
  const n = s1.length
  const m = s2.length
  const dp: number[][] = Array(n+1).fill(1).map(() => Array(m+1).fill(0))

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = (i > 0 ? s1.charCodeAt(i - 1) + dp[i-1][0] : 0) + (j > 0 ? s2.charCodeAt(j - 1) + dp[0][j-1] : 0)
        continue
      }

      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(
          dp[i-1][j] + s1.charCodeAt(i-1),
          dp[i][j-1] + s2.charCodeAt(j-1),
        )
      }
    }
  }
  return dp[n][m]
};

minimumDeleteSum('ab', 'a')
