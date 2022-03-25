// 面试题 01.07. 旋转矩阵
// https://leetcode-cn.com/problems/rotate-matrix-lcci/
const swap = (matrix, sx, sy, ex, ey) => {
  const temp = matrix[ex][ey]
  matrix[ex][ey] = matrix[sx][sy]
  matrix[sx][sy] = temp
}
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const length = matrix.length
  const rotateLayer = Math.floor(length / 2)

  // 层遍历
  for (let i = 0; i < rotateLayer; i++) {
    // top -> right
    let startX = i
    let startY = i + 1
    let endX = i + 1
    let endY = length - 1 - i

    const swapLength = length - 1 - i * 2

    for (let j = 0; j < swapLength; j++) {
      swap(matrix, endX + j, endY, startX, startY + j)
    }

    // right -> bottom
    endX = length - i - 1
    endY = length - i - 2
    for (let j = 0; j < swapLength; j++) {
      swap(matrix, endX, endY - j, startX, startY + j)
    }

    // bottom -> left
    endX = length - i - 2
    endY = i

    for (let j = 0; j < swapLength; j++) {
      swap(matrix, endX - j, endY, startX, startY + j)
    }
  }
  return matrix

};
