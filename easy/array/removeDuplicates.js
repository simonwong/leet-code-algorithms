// 26. 删除排序数组中的重复项
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0

  let j = 0

  let max = nums[nums.length - 1]

  for (let i = 1; i < nums.length; i++) {
    // 提前结束
    if (nums[j] === max) {
      break
    }
    if (nums[i] > nums[j]) {
      j += 1
      nums[j] = nums[i]
    }
  }
  return j + 1
}

const arr = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(arr)
console.log(arr)
