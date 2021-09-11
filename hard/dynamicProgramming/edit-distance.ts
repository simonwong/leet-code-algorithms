// 72. 编辑距离
// https://leetcode-cn.com/problems/edit-distance/

// dp[i][j] 表示word1 在i位置，word2 在 j 位置，最少操作数

// 三种选择
// 插入 dp[i-1][j]
// 删除 dp[i][j-1]
// 替换 dp[i-1][j-1]

// base case
// dp[0][0] = 0
// dp[0][j] = j
// dp[i][0] = i

// dp[1][1] = word1[1] === word2[1] ?

function minDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length

  const dp: number[][] = new Array(m + 1).fill([]).map(() => new Array(n+1).fill(0))
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(
          dp[i-1][j],
          dp[i][j-1],
          dp[i-1][j-1],
        ) + 1
      }
    }
  }
  return dp[m][n]
};

minDistance("horse", "ros")
