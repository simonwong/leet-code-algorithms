// 224. 基本计算器
// https://leetcode-cn.com/problems/basic-calculator/
function calculate(s: string): number {
  const infix = stringToInfix(s.replace(/\s/g, ''))
  const suffix = infixToSuffix(infix)

  return calculateSuffix(suffix)
};
function stringToInfix (s: string): string[] {
  const strStack: string[] = []
  let i = 0
  let current = ''

  while (i < s.length) {
    if (/\d/.test(s[i])) {
      current += s[i]
    } else if (/\+|\-|\(|\)/.test(s[i])) {
      strStack.push(s[i])
    }
    i++
    if (current && !/\d/.test(s[i])) {
      strStack.push(current)
      current = ''
    }
  }
  return strStack
}

function infixToSuffix (arr: string[]): string[] {
  const res: string[] = []
  const stack: string[] = []

  arr.forEach(cur => {
    switch (cur) {
      case '(':
        stack.push(cur)
        return;
      case ')':
        while (stack[stack.length - 1] !== '(') {
          res.push(stack.pop())
        }
        stack.pop()
        return;
      case '+':
        if (stack[stack.length - 1] === '(' || stack.length === 0) {
          stack.push(cur)
        } else {
          res.push(stack.pop())
          stack.push(cur)
        }
        return;
      case '-':
        if (stack[stack.length - 1] === '(' || stack.length === 0) {
          stack.push(cur)
        } else {
          res.push(stack.pop())
          stack.push(cur)
        }
        return;
      default:
        res.push(cur)
        return;
    }
  })

  while (stack.length > 0) {
    res.push(stack.pop())
  }
  return res
}

function calculateSuffix (suffix: string[]): number {
  const stack: Array<string | number> = []

  suffix.forEach(cur => {
    if (/\+|\-/.test(cur)) {
      const next = stack.pop() ?? 0
      const pre = stack.pop() ?? 0
      let end: number
      if (cur === '+') {
        end = Number(pre) + Number(next)
      } else if (cur === '-') {
        end = Number(pre) - Number(next)
      }
      stack.push(end)
    } else {
      stack.push(cur)
    }
  })
  return Number(stack.pop())
}
