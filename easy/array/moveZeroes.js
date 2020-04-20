// 283. 移动零
// https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]

    if (cur !== 0) {
      // 交换位置
      nums[i] = nums[j]
      nums[j] = cur
      j += 1
    }
  }

  return nums
};

const arr = [0,1,0,3,12]
moveZeroes(arr)
console.log(arr)
