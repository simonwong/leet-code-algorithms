// 剑指 Offer 04. 二维数组中的查找
// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/

// 二叉查找树
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  let i = matrix.length - 1
  let j = 0

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] < target) {
      j++
    } else if (matrix[i][j] > target) {
      i--
    } else {
      return true
    }
  }

  return false
};
