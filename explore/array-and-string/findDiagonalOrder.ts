// 对角线遍历
// https://leetcode-cn.com/leetbook/read/array-and-string/cuxq3/
function findDiagonalOrder(matrix: number[][]): number[] {
  const m = matrix.length
  if (m === 0) {
    return []
  }
  const n = matrix[0].length
  if (n === 0) {
    return []
  }
  let flag: boolean = true
  const res: number[] = []

  for (let i = 0; i < m + n; i++) {
    const pm = flag ? m : n
    const pn = flag ? n : m

    let x = i < pm ? i : pm -1
    let y = i - x

    while (x >= 0 && y < pn) {
      res.push(flag ? matrix[x][y] : matrix[y][x])
      x--
      y++
    }

    flag = !flag
  }

  return res
};
