// 70. 爬楼梯
// https://leetcode-cn.com/problems/climbing-stairs/

// 状态选择：1阶 / 二阶
// dp[i] i 表示当前有几的台阶数，可以有几种方法
// base case: dp[0] = 0; dp[1] = 1；dp[2] = 2
// 状态转移方程：dp[i] = dp[i-1] + dp[i-2]
function climbStairs(n: number): number {
  if (n <= 2) return n
  let dp_1 = 1
  let dp_2 = 2
  for (let i = 3; i <= n; i++) {
    const next = dp_2 + dp_1
    dp_1 = dp_2
    dp_2 = next
  }
  return dp_2
};
