// 695. 岛屿的最大面积
// https://leetcode-cn.com/problems/max-area-of-island/
function maxAreaOfIsland(grid: number[][]): number {
  let ans = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      ans = Math.max(ans, dfs(grid, i, j))
    }
  }

  return ans
};

function dfs(grid: number[][], x: number, y: number): number {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== 1) {
    return 0
  }
  grid[x][y] = 0
  let ans = 1
  ans += dfs(grid, x - 1, y)
  ans += dfs(grid, x + 1, y)
  ans += dfs(grid, x, y - 1)
  ans += dfs(grid, x, y + 1)
  return ans
}
