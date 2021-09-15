// 343. 整数拆分
// https://leetcode-cn.com/problems/integer-break/

// dp[i] 表示在整数为 i 时，的最大乘积

// base case
// dp[0] = 1
// dp[1] = 1

// 状态转移方程
// dp[i] = max(dp[i], dp[i-j] * j, (i - j) * j)


function integerBreak(n: number): number {
  let dp: number[] = new Array(n+1).fill(0)

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(
        dp[i],
        dp[i - j] * j,
        (i - j) * j
      )
    }
  }
  return dp[n]
};

integerBreak(3)
