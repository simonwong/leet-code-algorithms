// 17. 电话号码的字母组合
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/


const DIGIT_MAP = (() => {
  const map = {}
  let j = 'a'.charCodeAt(0) - 1
  for (let i = 2; i <= 9; i++) {
    map[i] = String.fromCharCode(++j, ++j, ++j).split('')
    if (i === 7 || i === 9) {
      map[i].push(String.fromCharCode(++j))
    }
  }

  return map
})()

function letterCombinations(digits: string): string[] {
  const ans: string[] = []
  const n = digits.length

  if (n === 0) {
    return ans
  }

  const dfs = (route: string, index: number) => {
    if (route.length === n) {
      ans.push(route)
      return
    }

    const selects = DIGIT_MAP[digits[index]]
    for (let i = 0; i < selects.length; i++) {
      dfs(route + selects[i], index + 1)
    }
  }

  dfs('', 0)

  return ans
};
