// 1567. 乘积为正数的最长子数组长度
// https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product/
function getMaxLen(nums: number[]): number {
  let maxCount = nums[0] > 0 ? 1 : 0
  let minCount = nums[0] < 0 ? 1 : 0
  let ans = maxCount

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      maxCount++
      minCount = minCount > 0 ? minCount + 1 : 0
    } else if (nums[i] < 0) {
      const nextMaxCount = minCount > 0 ? minCount + 1 : 0
      const nextMinCount = maxCount + 1
      maxCount = nextMaxCount
      minCount = nextMinCount
    } else {
      maxCount = 0
      minCount = 0
    }
    ans = Math.max(maxCount, ans)
  }
  return ans
};

getMaxLen([-1, -3, 1, 1, -8])
