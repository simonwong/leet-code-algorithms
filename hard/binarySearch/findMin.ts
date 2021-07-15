// 154. 寻找旋转排序数组中的最小值 II
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1

  if (nums[l] < nums[l]) {
    return nums[l]
  }

  while (l < r) {
    const mid = l + ((r - l) >> 1)

    if (nums[mid] > nums[r]) {
      l = mid + 1
    } else if (nums[mid] < nums[r]) {
      r = mid
    } else {
      r--
    }
  }

  return nums[l]
};

