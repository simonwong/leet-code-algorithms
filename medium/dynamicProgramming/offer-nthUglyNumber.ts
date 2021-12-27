// 剑指 Offer 49. 丑数
// https://leetcode-cn.com/problems/chou-shu-lcof/

// 状态定义：dp[i] 表示 第 i 个丑数
// base case dp[1] = 1
function nthUglyNumber(n: number): number {
  let dp = new Array(n)
  dp[0] = 1
  let a = 0
  let b = 0
  let c = 0
  for (let i = 1; i < n; i++) {
    const aa = dp[a] * 2
    const bb = dp[b] * 3
    const cc = dp[c] * 5
    dp[i] = Math.min(aa,bb,cc)
    if (dp[i] == aa) {
      a++
    }
    if (dp[i] == bb) {
      b++
    }
    if (dp[i] == cc) {
      c++
    }
  }
  return dp[n - 1]
};

nthUglyNumber(10)

// 只包含质因子 2、3 和 5 的数
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12
