// 976. 三角形的最大周长
// https://leetcode-cn.com/problems/largest-perimeter-triangle/
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  const arr = A.sort((a, b) => b - a)

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i]
    const b = arr[i+1]
    const c = arr[i+2]

    if (b == null || c == null) {
      return 0
    }
    if (a < b + c) {
      return a + b + c
    }
  }
};

console.log(largestPerimeter([3,6,2,3]))
