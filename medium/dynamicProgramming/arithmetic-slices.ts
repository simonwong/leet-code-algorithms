// 413. 等差数列划分
// https://leetcode-cn.com/problems/arithmetic-slices/

// 求等差数列个数，以及每个数列的长度

// dp[i]

function numberOfArithmeticSlices(nums: number[]): number {
  let n = nums.length

  if (n < 3) {
    return 0
  }

  let d = nums[0] - nums[1]
  let t = 0
  let ans = 0

  for (let i = 2; i < nums.length; i++) {
    if (nums[i-1] - nums[i] === d) {
      t++
    } else {
      d = nums[i-1] - nums[i]
      t = 0
    }
    ans += t
  }
  return ans
};
