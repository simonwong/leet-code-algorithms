// 零矩阵
// https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/1415/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const taskQueue = []

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) {
        taskQueue.push([i, j])
      }
    }
  }
  for (let i = 0; i < taskQueue.length; i++) {
    const [x, y] = taskQueue[i]

    for (let j = 0; j < matrix[x].length; j++) {
      matrix[x][j] = 0
    }
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][y] = 0
    }
  }

  return matrix
};

setZeroes([
  [1,1,1],
  [1,0,1],
  [1,1,1]
])
