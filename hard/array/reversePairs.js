// 51. 数组中的逆序对
// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
// TODO: 暴力解法超时 -_-
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0
  let minNum = nums[0]
  let minCount = 1

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count += 1
      }
    }
  }
  return count
};

reversePairs([7,5,6,4,3,4])
