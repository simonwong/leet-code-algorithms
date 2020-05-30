// 寻找数组的中心索引
// https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/770/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const l = nums.length

  if (l === 0) return -1
  if (l === 1) {
    return nums[0] === 0 ? 0 : -1
  }
  const sum = nums.reduce((a, b) => a + b)

  let leftSum = 0
  for (let i = 0; i < l; i++) {
    if (leftSum === (sum - nums[i]) / 2) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
};
console.log(pivotIndex([0]))
