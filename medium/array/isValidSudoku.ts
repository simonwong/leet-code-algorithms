// 36. 有效的数独
// https://leetcode-cn.com/problems/valid-sudoku/
function isValidSudoku(board: string[][]): boolean {
  const recordMap: {
    row: number[][]
    column: number[][]
    block: number[][]
  } = {
    row: new Array(9).fill([]).map(() => new Array(10).fill(0)),
    column: new Array(9).fill([]).map(() => new Array(10).fill(0)),
    block: new Array(9).fill([]).map(() => new Array(10).fill(0)),
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j]
      if (val === '.') {
        continue
      }
      recordMap.row[j][val] += 1
      recordMap.column[i][val] += 1
      const blockRow = Math.floor(j / 3)
      const blockCol = Math.floor(i / 3)
      const blockIndex = blockRow + (blockCol * 3)
      recordMap.block[blockIndex][val] += 1

      if (recordMap.row[j][val] > 1 || recordMap.column[i][val] > 1 || recordMap.block[blockIndex][val] > 1) {
        return false
      }
    }
  }
  return true
};
