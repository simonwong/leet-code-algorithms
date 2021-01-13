// 70. 爬楼梯
// https://leetcode-cn.com/problems/climbing-stairs/

// 选择是选 1 还是 2
// base case dp[0] = 0; dp[1] = 1; dp[2] = 2
class Solution {
  public int climbStairs(int n) {
    int[] dp = new int[n + 2];

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for (int i = 3; i < dp.length; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }
}
