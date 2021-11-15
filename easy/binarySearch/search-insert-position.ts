// 35. 搜索插入位置
// https://leetcode-cn.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    let mid = s + ((e - s) >> 1)
    if (nums[mid] === target) {
      return mid
    } else if (target > nums[mid]) {
      s = mid + 1
    } else {
      e = mid - 1
    }
  }
  return s
};

