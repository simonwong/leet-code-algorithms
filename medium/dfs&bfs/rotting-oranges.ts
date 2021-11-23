// 994. 腐烂的橘子
// https://leetcode-cn.com/problems/rotting-oranges/
function orangesRotting(grid: number[][]): number {
  const rotQueue: [number, number][] = []
  const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let ans = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rotQueue.push([i, j])
      }
    }
  }

  while (rotQueue.length > 0) {
    let len = rotQueue.length
    let hasNotRot = false
    while (len > 0) {
      const [i, j] = rotQueue.shift()
      for (let d = 0; d < direction.length; d++) {
        const ni = i + direction[d][0];
        const nj = j + direction[d][1];

        if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length && grid[ni][nj] === 1) {
          hasNotRot = true
          grid[ni][nj] = 2
          rotQueue.push([ni, nj])
        }
      }
      len--
    }

    if (hasNotRot) {
      ans++
    }
  }

  // 这里可以优化掉，变成一个变量
  // 计算总共有多少 1， 在腐烂过程中 -1， 结果这个大于 0 时，返回 -1
  if (grid.some(row => row.some(cell => cell === 1))) {
    return -1
  }

  return ans
};
