// 162. 寻找峰值
// https://leetcode-cn.com/problems/find-peak-element/

function findPeakElement(nums: number[]): number {
  const n = nums.length
  let i = 0
  let j = n - 1
  while (i <= j) {
    const m = i + ((j - i) >> 1)
    const mid = nums[m]
    const left = m - 1 < 0 ? Number.MIN_SAFE_INTEGER : nums[m - 1]
    const right = m + 1 >= n ? Number.MIN_SAFE_INTEGER : nums[m + 1]
    if (mid > left && mid > right) {
      return m
    } else if (mid < left) {
      j = m - 1
    } else if (mid < right) {
      i = m + 1
    }
  }
  return null
};
console.log(findPeakElement([1,23]))
