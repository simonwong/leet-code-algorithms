// 12. 整数转罗马数字
// https://leetcode-cn.com/problems/integer-to-roman/

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
const ROMAN_MAP = {
  0: {
    base: 'I',
    half: 'V',
  },
  1: {
    base: 'X',
    half: 'L',
  },
  2: {
    base: 'C',
    half: 'D',
  },
  3: {
    base: 'M',
    half: '',
  },
}

function intToRoman(num: number): string {
  let ans = ''
  let str = String(num)
  const n = str.length
  for (let i = 0; i < n; i++) {
    const char = Number(str.charAt(n - i - 1))
    const { base, half } = ROMAN_MAP[i]
    let roman = ''
    if (char < 4) {
      roman = roman.padStart(char, base)
    } else if (char === 4) {
      roman = `${base}${half}`
    } else if (char < 9) {
      roman = `${half}${roman.padStart(char - 5, base)}`
    } else if (char === 9) {
      roman = `${base}${ROMAN_MAP[i+1].base}`
    }
    ans = `${roman}${ans}`
  }
  return ans
};
intToRoman(1994)
