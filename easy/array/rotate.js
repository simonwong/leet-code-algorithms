// 189. 旋转数组
// https://leetcode-cn.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length

  let l = nums.length
  let count = 0 // 交换次数；交换 l 次后结束
  let start = 0 // 起始位置

  // 通过 count 的交换次数判断 来结束循环
  for (; count < l; start++) {
    let prevIndex = start
    let prev = nums[prevIndex]

    // 把当前要交换一直换下去，
    do {
      const curIndex = (prevIndex + k) % l
      let current = nums[curIndex]
      // 交换位置并保留被交换的，等到下次交换
      nums[curIndex] = prev
      prev = current
      prevIndex = curIndex
      count++

      // 回到了原来的位置，结束循环
    } while (start !== prevIndex)
  }
  return nums
};

rotate([1,2,3,4,5,6,7], 3)
