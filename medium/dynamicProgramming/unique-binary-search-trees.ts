// 96. 不同的二叉搜索树
// https://leetcode-cn.com/problems/unique-binary-search-trees/

// dp[i] // 表示 i 个数有多少种

// dp[0] = 0
// dp[1] = 1
// dp[2] = 2
// dp[3] = dp[2] * 2 + dp[1]
// dp[4] = dp[3] * 2 + dp[2] * 2
// dp[5] = dp[4] * 2 + dp[3] * 2 + dp[2] * 2

function numTrees(n: number): number {
  const dp: number[] = []
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = 0

    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
};

numTrees(19)
