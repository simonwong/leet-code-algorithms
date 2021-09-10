// 392. 判断子序列
// https://leetcode-cn.com/problems/is-subsequence/


// dp[i][j] 记录从 i 开始往后 j 第一次出现的位置

// dp[i][j] = i 当 dp[i] = j
// dp[i][j] = dp[i+1][j] 当 dp[i] != j
function isSubsequence(s: string, t: string): boolean {
  const n = s.length
  const m = t.length

  const dp: number[][] = new Array(m + 1).fill([]).map(() => new Array(26).fill(0))
  for (let i = 0; i < 26; i++) {
    dp[m][i] = m
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t[i].charCodeAt(0) === j + 97) {
        dp[i][j] = i
      } else {
        dp[i][j] = dp[i+1][j]
      }
    }
  }

  let add = 0
  for (let i = 0; i < n; i++) {
    if (dp[add][s[i].charCodeAt(0) - 97] === m) {
      return false
    }
    add = dp[add][s[i].charCodeAt(0) - 97] + 1
  }
  return true
};

isSubsequence('aec', 'ahbgdc')


function isSubsequenceByDoublePoint(s: string, t: string): boolean {
  let i = 0
  let j = 0

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }
  return i === s.length
};
