// 面试题29. 顺时针打印矩阵
// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const height = matrix.length
  if (height === 0) return []

  const width = matrix[0].length
  const result = []

  // [top, left] -> [top, right] -> [bottom, right] -> [bottom, left] -> [top, left]
  // top++, left++, bottom--, right--
  let top = 0
  let left = 0
  let bottom = height - 1
  let right = width - 1

  while (top <= bottom && left <= right) {
    // top
    let topL = right - left + 1
    for (let i = 0; i < topL; i++) {
      result.push(matrix[top][left + i])
    }

    // right
    let rightL = bottom - top + 1
    for (let i = 1; i < rightL; i++) {
      result.push(matrix[top + i][right])
    }

    // bottom , 高度为 1， 即 bottom === top 时，避免重复遍历
    if (bottom > top) {
      let bottomL = right - left + 1
      for (let i = 1; i < bottomL; i++) {
        result.push(matrix[bottom][right - i])
      }
    }

    // left , 宽度为 1， 即 right === left 时，避免重复遍历
    if (right > left) {
      let leftL = bottom - top
      for (let i = 1; i < leftL; i++) {
        result.push(matrix[bottom - i][left])
      }
    }

    top += 1
    left += 1
    bottom -= 1
    right -= 1
  }
  return result
};


console.log(spiralOrder([]))
