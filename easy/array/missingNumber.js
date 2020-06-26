// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
// 剑指 Offer 53 - II. 0～n-1中缺失的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)

    // 说明在右边
    if (nums[mid] === mid) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
};
