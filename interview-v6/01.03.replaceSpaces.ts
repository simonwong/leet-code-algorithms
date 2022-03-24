// 面试题 01.03. URL化
// https://leetcode-cn.com/problems/string-to-url-lcci/
function replaceSpaces(S: string, length: number): string {
  let ans = ''
  for (let i = 0; i < length; i++) {
    const char = S.charAt(i)
    ans += char === ' ' ? '%20' : char
  }

  return ans
};
