// 剑指 Offer 14- I. 剪绳子
// https://leetcode-cn.com/problems/jian-sheng-zi-lcof/


// 贪心算法
function cuttingRope(n: number): number {
  if (n <= 3) return n - 1
  if (n === 4) return 4

  let res = 1
  while (n > 4) {
    res *= 3
    n -= 3
  }
  return res * n
};


// ========================== 动态规划 ========================================
// 状态：dp[i] 表示长度为 i 时，最大的乘积
// dp[0] = 0
// dp[1] = 1

// dp[2] = 1
// dp[i] = Math.max(
// dp[i-j] * j,
// (i - j) * j,
//)
function cuttingRopeByDp(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    let temp = 0
    for (let j = 2; j < i; j++) {
      temp = Math.max(
        temp,
        (i-j) * j,
        dp[i-j] * j,
      )
    }
    dp[i] = temp
  }
  return dp[n]
};
