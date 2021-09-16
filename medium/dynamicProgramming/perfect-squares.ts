// 279. 完全平方数
// https://leetcode-cn.com/problems/perfect-squares/

// dp[i] 表示和为 i 时的完全平方数的最少数量
// base case
//dp[0] = 1; dp[1] = 1;

// dp[0] = 0

// dp[i] = min(
  // dp[i - j * j]
// ) + 1

function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_SAFE_INTEGER
    for (let j = 1; j * j <= i; j++) {
     min = Math.min(
       min,
        dp[i - j * j]
      )
    }
    dp[i] = min + 1
  }
  return dp[n]
};
numSquares(13)
