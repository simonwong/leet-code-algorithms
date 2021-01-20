// 零矩阵
// https://leetcode-cn.com/leetbook/read/array-and-string/ciekh/
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const yOb = {}
  const xOb = {}

  matrix.forEach((line, y) => {
    line.forEach((item, x) => {
      if (item === 0) {
        yOb[y] = 1
        xOb[x] = 1
      }
    })
  })

  matrix.forEach((line, y) => {
    line.forEach((item, x) => {
      if (yOb[y] || xOb[x]) {
        matrix[y][x] = 0
      }
    })
  })
};
