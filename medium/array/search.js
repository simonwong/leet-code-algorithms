// 33. 搜索旋转排序数组
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let n = nums.length
  if (n <= 1) {
    return nums[0] === target ? 0 : -1
  }

  let l = 0
  let r = n

  while (l <= r) {
    let mid = Math.ceil((l + r) / 2)
    if (nums[mid] === target) {
      return mid
    }

    // 判断是否有序
    if (nums[0] < nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
};

console.log(search([5,1,2,3,4], 1))
