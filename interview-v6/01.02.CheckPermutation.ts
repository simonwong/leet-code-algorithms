// 面试题 01.02. 判定是否互为字符重排
// https://leetcode-cn.com/problems/check-permutation-lcci/
function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false
  }
  const obj = {}
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1.charAt(i)
    const char2 = s2.charAt(i)
    obj[char1] ||= 0
    obj[char1] += 1
    obj[char2] ||= 0
    obj[char2] -= 1
  }
  return Object.values(obj).every(v => v === 0)
};
