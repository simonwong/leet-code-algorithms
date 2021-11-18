// 344. 反转字符串
// https://leetcode-cn.com/problems/reverse-string/
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let i = 0
  let j = s.length - 1

  while (i < j) {
    const temp = s[j]
    s[j] = s[i]
    s[i] = temp
    i++
    j--
  }
};
