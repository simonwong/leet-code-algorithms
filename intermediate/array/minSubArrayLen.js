// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 209. 长度最小的子数组

/**
TODO: 使用二分查找法
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

}

/**
 * 双指针 ，实际复杂度有点高的 O(n2) 了
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0] >= s ? 1 : 0

  let min = null

  let sum = 0
  let len = 0

  let i = 0 // 慢
  let j = 0 // 快
  for (;i < nums.length;) {
    if (i === j) {
      sum = nums[i]
      len = 1
    } else {
      sum += nums[j]
      len += 1
    }
    if (sum >= s) {
      min = min === null ? len : Math.min(min, len)
      sum = 0
      i += 1
      j = i
    } else if (j === nums.length - 1) {
      break
    } else {
      j++
    }
  }
  return min || 0
};

minSubArrayLen(7, [1,1,2])
