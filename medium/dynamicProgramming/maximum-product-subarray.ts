// 152. 乘积最大子数组
// https://leetcode-cn.com/problems/maximum-product-subarray/

function maxProduct(nums: number[]): number {
  if (nums.length <= 1) {
    return nums[0] || 0
  }

  let ans: number = nums[0]
  let max: number = nums[0]
  let min: number = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const maxNum = nums[i] * max
    const minNum = nums[i] * min
    max = Math.max(nums[i], maxNum, minNum)
    min = Math.min(nums[i], maxNum, minNum)
    ans = Math.max(max, ans)
  }
  return ans
};
maxProduct([-1,-2,-3])
