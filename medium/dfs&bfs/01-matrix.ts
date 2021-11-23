// 542. 01 矩阵
// https://leetcode-cn.com/problems/01-matrix/
function updateMatrix(mat: number[][]): number[][] {
  const seen: number[][] = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(null))
  const dist: number[][] = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(null))
  const queue: [number, number][] = []
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j])
        seen[i][j] = 1
      }
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift()

    for (let d = 0; d < dirs.length; d++) {
      const ni = i + dirs[d][0]
      const nj = j + dirs[d][1]

      if (ni >= 0 && ni < mat.length && nj >= 0 && nj < mat[0].length && !seen[ni][nj]) {
        dist[ni][nj] = dist[i][j] + 1
        queue.push([ni, nj])
        seen[ni][nj] = 1
      }
    }
  }

  return dist
};
