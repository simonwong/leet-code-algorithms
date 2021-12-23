// 剑指 Offer 29. 顺时针打印矩阵
// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length
  if (m === 0) {
    return []
  }
  const n = matrix[0].length
  const ans: number[] = []
  let si = 0
  let sj = 0
  let xi = m - 1
  let xj = n -1
  let i = si
  let j = sj

  while (si <= xi && sj <= xj) {
    // top
    while (j <= xj) {
      ans.push(matrix[i][j])
      j++
    }
    j = xj
    i++
    // right
    while (i <= xi) {
      ans.push(matrix[i][j])
      i++
    }
    i = xi
    j--
    // bottom
    while (si < xi && j > sj) {
      ans.push(matrix[i][j])
      j--
    }
    j = sj
    // left
    while (sj < xj && i > si) {
      ans.push(matrix[i][j])
      i--
    }
    si++
    sj++
    xi--
    xj--
    i = si
    j = sj
  }
  return ans
};

// spiralOrder(
//   [[1],[2],[3],[4]]
// )
// [[1, 2, 3, 4, 5, 6],
// [7, 8, 9, 10,11,12],
// [7, 8, 9, 10,11,12],
// [13,14,15,16,17,18]
// ]

// 1, 2, 3, 4, 5, 6
// 7, 8, 9, 10,11,12
// 7, 8, 9, 10,11,12
// 13,14,15,16,17,18

// m = matrix.length
// n = matrix[0].length

// i,j
// 0,0
// si,sj = 0,0
// xi,xj = m-1,n-1

// top
// j++ (j <= xj)

// right
// i++ (i <= xi)

// bottom
// j-- (j > sj)

// left
// i-- (i > si)

// si++
// sj++
// xi--
// xj--
// i = si
// j = sj
