// 剑指 Offer 12. 矩阵中的路径
// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  const dfs = (i: number, j: number, idx: number) => {
    if (idx >= word.length) {
      return true
    }
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return false
    }

    if (board[i][j] === word.charAt(idx)) {
      board[i][j] = 'DONE'
      const ans = (
        dfs(i + 1, j, idx + 1) ||
        dfs(i - 1, j, idx + 1) ||
        dfs(i, j - 1, idx + 1) ||
        dfs(i, j + 1, idx + 1)
      )
      board[i][j] = word.charAt(idx)
      return ans
    }
    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
};
