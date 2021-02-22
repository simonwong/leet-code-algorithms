// 766. 托普利茨矩阵
// https://leetcode-cn.com/problems/toeplitz-matrix/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  const y = matrix.length
  const x = matrix[0].length
  for (let i = 0; i < y - 1; i++) {
    for (let j = 0; j < x - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false
      }
    }
  }
  return true
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
