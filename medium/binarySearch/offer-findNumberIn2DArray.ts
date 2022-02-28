// 剑指 Offer 04. 二维数组中的查找
// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/

// 二分
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  const m = matrix.length
  const n = matrix[0].length

  const binaryIn2DArr = (start: [number, number], end: [number, number]): boolean => {
    const [sy, sx] = start
    const [ey, ex] = end
    if (ey < sy || ex < sx || sy < 0 || ey >= m || sx < 0 || ex >= n) {
      return false
    }
    const my = (sy + ey) >> 1
    const mx = (sx + ex) >> 1
    if (target < matrix[my][mx]) {
      return binaryIn2DArr([sy, sx], [my-1, ex]) || binaryIn2DArr([my, sx], [ey, mx-1])
    }
    if (target > matrix[my][mx]) {
      return binaryIn2DArr([sy, mx+1], [ey, ex]) || binaryIn2DArr([my + 1, sx], [ey, mx])
    }
    return true
  }

  return binaryIn2DArr([0, 0], [m - 1, n - 1])
};




// 二叉查找树
function findNumberIn2DArray2(matrix: number[][], target: number): boolean {
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

// 暴力
function findNumberIn2DArray3(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) {
        return true
      }
    }
  }
  return false
};
