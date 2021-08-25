// 264. 丑数 II
// https://leetcode-cn.com/problems/ugly-number-ii/
function nthUglyNumber(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[1] = 1
  let p2 = 1
  let p3 = 1
  let p5 = 1

  for (let i = 2; i <= n; i++) {
    const num2 = dp[p2] * 2
    const num3 = dp[p3] * 3
    const num5 = dp[p5] * 5
    dp[i] = Math.min(num2, num3, num5)

    if (dp[i] === num2) {
      p2++
    }
    if (dp[i] === num3) {
      p3++
    }
    if (dp[i] === num5) {
      p5++
    }
  }

  return dp[n]
};
