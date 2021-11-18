// 557. 反转字符串中的单词 III
// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

var reverseString1 = function(s) {
  let l = s.length
  if (l <= 1) return

  let j = l - 1

  for (let i = 0; i < j; i++) {
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
    j--
  }
  return s
};

function reverseWords(s: string): string {
  const sa = s.split(' ').map(str => {
    const strArr = str.split('')
    reverseString1(strArr)
    return strArr.join('')
  })
  return sa.join(' ')
};
