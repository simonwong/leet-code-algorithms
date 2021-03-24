
// 1143. 最长公共子序列
// https://leetcode-cn.com/problems/longest-common-subsequence/

let memo: number[][]

function longestCommonSubsequence(text1: string, text2: string): number {
  memo = Array(text1.length).fill(0).map(() => Array(text2.length).fill(-1))

  return dp(text1, 0, text2, 0)
};

function dp (text1: string, i: number, text2: string, j: number): number {
  if (i === text1.length || j === text2.length) {
    return 0
  }

  if (memo[i][j] !== -1) {
    return memo[i][j]
  }

  if (text1.charAt(i) === text2.charAt(j)) {
    memo[i][j] = 1 + dp(text1, i + 1, text2, j + 1)
  } else {
    memo[i][j] = Math.max(
      dp(text1, i + 1, text2, j),
      dp(text1, i, text2, j + 1)
    )
  }

  return memo[i][j]
}
