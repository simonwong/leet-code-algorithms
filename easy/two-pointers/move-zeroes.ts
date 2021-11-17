// 283. 移动零
// https://leetcode-cn.com/problems/move-zeroes/
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0
  let right = 0

  while (right < nums.length) {
    const temp = nums[right]

    if (temp !== 0) {
      nums[right] = nums[left]
      nums[left++] = temp
    }
    right++
  }
};
