// 11. 盛最多水的容器
// https://leetcode-cn.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 * 双指针，移动矮的柱子
 */
var maxArea = function(height) {
  let i = height.length - 1
  let j = 0
  let max = 0

  for (; j < i;) {
    max = Math.max(max, (i - j) * Math.min(height[j], height[i]))

    if (height[j] < height[i]) {
      j += 1
    } else {
      i -= 1
    }
  }
  return max
};

maxArea([1,8,6,2,5,4,8,3,7])
maxArea([1,2,1])
maxArea([1,1])
maxArea([2,3,4,5,18,17,6])
