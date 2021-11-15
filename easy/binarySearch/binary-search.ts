// 704. 二分查找
// https://leetcode-cn.com/problems/binary-search/
function search(nums: number[], target: number): number {
  let s = 0
  let e = nums.length

  while (s <= e) {
    const m = s + ((e - s) >> 1)

    if (nums[m] === target) {
      return m
    } else if (target > nums[m]) {
      s = m + 1
    } else {
      e = m - 1
    }
  }
  return -1
};


search([-1,0,3,5,9,12], 9)
