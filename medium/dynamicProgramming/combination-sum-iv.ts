// 377. 组合总和 Ⅳ
// https://leetcode-cn.com/problems/combination-sum-iv/

// dp[i] 表示 target 为 i 时最多可以有多少种组合
// nums = [1,2,3], target = 4

function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  console.log(`dp`, dp)
  return dp[target]
};
combinationSum4([-1,1,2,3], 4)
