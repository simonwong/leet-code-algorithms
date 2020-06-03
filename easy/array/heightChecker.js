// 1051. 高度检查器
// https://leetcode-cn.com/problems/height-checker/
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  // 101 个桶
  const arr = new Array(101).fill(0)

  // 计算每个桶有多少元素
  for (let i = 0; i < heights.length; i++) {
    arr[heights[i]]++
  }

  let num = 0
  for (let i = 1, j = 0; i < arr.length; i++) {
    while (arr[i]-- > 0) {
      if (heights[j++] != i) {
       num++
      }
    }
  }
  return num
};

heightChecker([1,1,4,2,1,3])
