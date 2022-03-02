// 494. 目标和
// https://leetcode-cn.com/problems/target-sum/

// nums = [1,1,1,1,1], target = 3

// 将问题转为 01 背包问题
function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0
  for (const num of nums) {
    sum += num
  }
  const diff = sum - target
  if (diff < 0 || diff % 2 !== 0) {
    return 0
  }

  const neg = Math.floor(diff / 2)
  const dp = new Array(neg + 1).fill(0)
  dp[0] = 1

  for (const num of nums) {
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num]
    }
  }

  return dp[neg]
};


// 暴力解（回溯）
// function findTargetSumWays(nums: number[], target: number): number {
//   let ans = 0
//   const dfs = (idx: number, sum: number) => {
//     if (idx >= nums.length) {
//       if (sum === target) {
//         ans++
//       }
//       return
//     }

//     dfs(idx + 1, sum + nums[idx])
//     dfs(idx + 1, sum - nums[idx])
//   }

//   dfs(0, 0)
//   return ans
// };
