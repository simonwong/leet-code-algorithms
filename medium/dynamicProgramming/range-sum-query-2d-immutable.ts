// 304. 二维区域和检索 - 矩阵不可变
// https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
class NumMatrix {
  preSum: number[][]

  constructor(matrix: number[][]) {
    this.preSum = new Array(matrix.length + 1)
      .fill([])
      .map(() => new Array(matrix[0].length + 1).fill(0))

    for (let i = 1; i < this.preSum.length; i++) {
      for (let j = 1; j < this.preSum[i].length; j++) {
        this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] - this.preSum[i - 1][j - 1] + matrix[i-1][j-1]
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1]
  }
}

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/

var asd = new NumMatrix([
  [3,0,1,4,2],
  [5,6,3,2,1],
  [1,2,0,1,5],
  [4,1,0,1,7],
  [1,0,3,0,5]
])
var param_1 = asd.sumRegion(2,1,4,3)
console.log(`param_1`, param_1)
var param_2 = asd.sumRegion(1,1,2,2)
console.log(`param_2`, param_2)
var param_3 = asd.sumRegion(1,2,2,4)
console.log(`param_3`, param_3)
