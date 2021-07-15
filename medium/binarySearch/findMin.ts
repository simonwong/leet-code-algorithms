// 153. 寻找旋转排序数组中的最小值
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
function findMinInRotateArr(nums: number[]): number {
  let l = 0
  let r = nums.length - 1

  if (nums[l] < nums[r]) {
    return nums[l]
  }
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[r]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return nums[l]
};
