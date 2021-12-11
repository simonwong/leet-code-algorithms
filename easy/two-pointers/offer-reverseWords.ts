// 剑指 Offer 58 - I. 翻转单词顺序
// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
function reverseWords(s: string): string {
  s = s.trim()
  let ans = ''
  let i = s.length - 1
  let j = i

  while (i >= 0) {
    while (i >= 0 && s.charAt(i) != ' ') {
      i--
    }
    ans += s.substring(i + 1, j + 1) + ' '
    while (i >= 0 && s.charAt(i) === ' ') {
      i--
    }
    j = i
  }

  return ans.trim()
};


// "the sky is  blue"
