// 415. 字符串相加
// https://leetcode-cn.com/problems/add-strings/
function addStrings(num1: string, num2: string): string {
  let length_1 = num1.length - 1
  let length_2 = num2.length - 1

  let res: number[] = []
  let carry = 0
  while (length_1 >= 0 || length_2 >= 0 || carry != 0) {
    const s1 = length_1 >= 0 ? Number(num1.charAt(length_1)) : 0
    const s2 = length_2 >= 0 ? Number(num2.charAt(length_2)) : 0
    const cur = s1 + s2 + carry
    res.unshift(cur % 10)
    carry = Math.floor(cur / 10)

    length_1 -= 1
    length_2 -= 1
  }

  return res.join('')
};
