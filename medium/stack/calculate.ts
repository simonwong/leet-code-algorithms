// 面试题 16.26. 计算器
// https://leetcode-cn.com/problems/calculator-lcci/

const SYMBOL_MAP = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

function generateInfixStack (s: string): (number | string)[] {
  const infixStack: (number | string)[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue
    }
    if (SYMBOL_MAP[s[i]]) {
      infixStack.push(s[i])
      continue
    }
    const top = infixStack[infixStack.length - 1]
    if (typeof top === 'number') {
      infixStack.pop()
      infixStack.push(Number(`${top}${s[i]}`))
    } else {
      infixStack.push(Number(s[i]))
    }
  }
  return infixStack
}

function simpleCal (prev: number, next: number, symbol: string) {
  switch (symbol) {
    case '+':
      return prev + next
    case '-':
      return prev - next
    case '*':
      return prev * next
    case '/':
      return Math.floor(prev / next)
    default:
      break;
  }
}

function calculate(s: string): void {
  const infix = generateInfixStack(s)
  const calStack = []
  const symbolStack = []
  for (let i = 0; i < infix.length; i++) {
    const el = infix[i]
    const topSymbol = symbolStack[symbolStack.length - 1]
    if (SYMBOL_MAP[el]) {
      if (!topSymbol || SYMBOL_MAP[el] > SYMBOL_MAP[topSymbol]) {
        symbolStack.push(el)
      } else {
        const curSymbol = symbolStack.pop()
        const next = calStack.pop()
        const prev = calStack.pop()
        i--
        calStack.push(
          simpleCal(prev, next, curSymbol)
        )
      }
    } else {
      calStack.push(el)
    }
  }

  while (symbolStack.length > 0) {
    const curSymbol = symbolStack.pop()
    const next = calStack.pop()
    const prev = calStack.pop()
    calStack.push(
      simpleCal(prev, next, curSymbol)
    )
  }
  return calStack[0]
};

/**
 * 这里使用中缀转后缀再计算的方式
 */
// const SYMBOL_MAP = {
//   '+': 1,
//   '-': 1,
//   '*': 2,
//   '/': 2
// }

// function generateInfixStack (s: string): (number | string)[] {
//   const infixStack: (number | string)[] = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//       continue
//     }
//     if (SYMBOL_MAP[s[i]]) {
//       infixStack.push(s[i])
//       continue
//     }
//     const top = infixStack[infixStack.length - 1]
//     if (typeof top === 'number') {
//       infixStack.pop()
//       infixStack.push(Number(`${top}${s[i]}`))
//     } else {
//       infixStack.push(Number(s[i]))
//     }
//   }
//   return infixStack
// }

// function transInfixToSuffix(infixStack: (number|string)[]): (number|string)[] {
//   const suffixStack: (number|string)[] = []
//   const symbolStack: (number|string)[] = []

//   for (let i = 0; i < infixStack.length; i++) {
//     const el = infixStack[i];
//     // 1. 如果是数字，入栈
//     if (typeof el === 'number') {
//       suffixStack.push(el)
//       continue;
//     }
//     // 2. 运算符
//     const topSymbol = symbolStack[symbolStack.length - 1]
//     // 2.1. 运算符栈为空，则入运算符栈
//     if (!topSymbol) {
//       symbolStack.push(el)
//       continue;
//     }
//     // 2.2. 优先级大于栈顶，则入运算符栈
//     if (SYMBOL_MAP[el] > SYMBOL_MAP[topSymbol]) {
//       symbolStack.push(el)
//       continue;
//     }
//     // 2.3. 运算符栈顶出栈，入栈
//     suffixStack.push(
//       symbolStack.pop()
//     )
//     i--
//   }
//   while (symbolStack.length > 0) {
//     suffixStack.push(
//       symbolStack.pop()
//     )
//   }
//   return suffixStack
// }

// function calculateBySuffixStack(suffix: (number|string)[]): number {
//   const resStack = []
//   for (let i = 0; i < suffix.length; i++) {
//     if (resStack.length === 0) {
//       resStack.push(suffix[i])
//     } else {
//       if (SYMBOL_MAP[suffix[i]]) {
//         const next = resStack.pop()
//         const prev = resStack.pop()
//         let calNum: number
//         switch (suffix[i]) {
//           case '+':
//             calNum = prev + next
//             break;
//           case '-':
//             calNum = prev - next
//             break;
//           case '*':
//             calNum = prev * next
//             break;
//           case '/':
//             calNum = Math.floor(prev / next)
//             break;
//           default:
//             break;
//         }
//         resStack.push(calNum)
//       } else {
//         resStack.push(suffix[i])
//       }
//     }
//   }
//   return resStack[0]
// }

// function calculate(s: string): number {
//   const infixStack = generateInfixStack(s)
//   const suffixStack = transInfixToSuffix(infixStack)

//   return calculateBySuffixStack(suffixStack)
// };
