// 581. 最短无序连续子数组
// https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
function findUnsortedSubarray(nums: number[]): number {
  let min = Number.MAX_SAFE_INTEGER
  let right = -1
  let max = Number.MIN_SAFE_INTEGER
  let left = -1

  for (let i = 0; i < nums.length; i++) {
    if (max > nums[i]) {
      right = i
    } else {
      max = nums[i]
    }
    let reverseIndex = nums.length - i - 1

    if (min < nums[reverseIndex]) {
      left = reverseIndex
    } else {
      min = nums[reverseIndex]
    }
  }

  return right === -1 ? 0 : right - left  + 1
};
