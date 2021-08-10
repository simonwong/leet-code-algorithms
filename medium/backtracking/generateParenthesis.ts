// 22. 括号生成
// https://leetcode-cn.com/problems/generate-parentheses/

// dfs + 剪枝
function generateParenthesis(n: number): string[] {
  const res: string[] = []
  const dfs = (str: string, left: number, right: number) => {
    if (left === 0 && right === 0) {
      res.push(str)
      return
    }
    if (right < left) {
      return
    }

    if (left > 0) {
      dfs(str + '(', left - 1, right)
    }
    if (right > 0) {
      dfs(str + ')', left, right - 1)
    }
  }

  dfs('', n, n)

  return res
};

generateParenthesis(3)
