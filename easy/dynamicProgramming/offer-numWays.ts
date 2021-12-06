// 剑指 Offer 10- II. 青蛙跳台阶问题
// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

// base case dp[0] = 1 dp[1] = 1

// dp[i] = dp[i-1] + dp[i-2]

function numWays(n: number): number {
  let dp_0 = 1
  let dp_1 = 1

  for (let i = 0; i < n; i++) {
    let next = (dp_0 + dp_1) % 1000000007
    dp_0 = dp_1
    dp_1 = next
  }
  return dp_0
};
