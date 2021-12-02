// 剑指 Offer 53 - II. 0～n-1中缺失的数字
// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
function missingNumber(nums: number[]): number {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = (i + j) >> 1
    if (nums[mid] > mid) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return i
};
