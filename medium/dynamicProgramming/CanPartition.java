// 416. 分割等和子集
// https://leetcode-cn.com/problems/partition-equal-subset-sum/

class SolutionStateCompression {
  public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }
    // 为奇数时，不可能划分
    if (sum % 2 != 0) {
      return false;
    }

    int n = nums.length;
    sum = sum / 2;

    boolean[] dp = new boolean[sum + 1];

    for (int i = 0; i < dp.length; i++) {
      dp[i] = false;
    }
    // base case
    dp[0] = true;

    for (int i = 0; i < n; i++) {
      for (int j = sum; j >= 0; j--) {
        if (j - nums[i] >= 0) {
          // 选择装或不装，只要要有一种情况是 true 就行
          dp[j] = dp[j] || dp[j-nums[i]];
        }
      }
    }
    return dp[sum];
  }
}
class Solution {
  public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }
    // 为奇数时，不可能划分
    if (sum % 2 != 0) {
      return false;
    }

    int n = nums.length;
    sum = sum / 2;

    boolean[][] dp = new boolean[n + 1][sum + 1];

    for (int i = 0; i < dp.length; i++) {
      Arrays.fill(dp[i], false);
    }
    // base case
    for (int i = 0; i <= n; i++) {
      dp[i][0] = true;
    }

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= sum; j++) {
        // 表示已经装满了
        if (j - nums[i -1] < 0) {
          dp[i][j] = dp[i -1][j];
        } else {
          // 选择装或不装，只要要有一种情况是 true 就行
          dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
        }
      }
    }
    return dp[n][sum];
  }
}
