/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  if (k === 0) {
    return nums[0]
  }
  if (nums.length === 1 && k % 2 === 1) {
    return -1
  }
  let ans = -1
  let i = 0
  for (;i < k - 1 && i < nums.length; i++) {
    ans = Math.max(ans, nums[i])
  }
  if (i + 1 < nums.length) {
    ans = Math.max(ans, nums[i + 1])
  }
  return ans
};
maximumTop([18], 3)
