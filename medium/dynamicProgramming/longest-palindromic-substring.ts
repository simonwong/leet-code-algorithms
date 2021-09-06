// 5. 最长回文子串
// https://leetcode-cn.com/problems/longest-palindromic-substring/

// dp[i][j] 表示第 i 到 j 为下标位置的字符串是否是回文
// base case dp[i][i] = 1
function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) {
    return s
  }

  let maxLen = 1
  let start = 0
  const dp: boolean[][] = new Array(len).fill([]).map(() => new Array(len).fill(false))
  for (let i = 0; i < len; i++) {
    // base case
    dp[i][i] = false
  }

  // 迭代长度
  for (let l = 2; l <= len; l++) {
    // 迭代其实位置
    for (let i = 0; i < len; i++) {
      const j = l + i - 1 // 计算右边界
      if (j > len) {
        break
      }

      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i+1][j-1] // 状态转移
        }
      }

      if (dp[i][j] && j - i + 1  > maxLen) {
        start = i
        maxLen = j - i + 1
      }
    }
  }

  return s.substring(start, start + maxLen)
};
