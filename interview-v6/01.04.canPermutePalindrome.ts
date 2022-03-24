// 面试题 01.04. 回文排列
// https://leetcode-cn.com/problems/palindrome-permutation-lcci/
function canPermutePalindrome(s: string): boolean {
  const sObj: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sObj[char] ||= 0
    sObj[char]++
  }
  let oddNum = 0
  for (const count of Object.values(sObj)) {
    if (count % 2 !== 0) {
      oddNum++
    }
  }
  return oddNum <= 1
};
