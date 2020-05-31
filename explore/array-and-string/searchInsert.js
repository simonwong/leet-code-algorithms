// 搜索插入位置
// https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/1412/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
};
