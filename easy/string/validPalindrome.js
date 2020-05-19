// 680. 验证回文字符串 Ⅱ
// https://leetcode-cn.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l = s.length

  if (l <= 2) return true

  let i = 0
  let j = l - 1

  while (i < j) {
    if (s[i] !== s[j]) {
      return isReverseString(s, i+1, j) || isReverseString(s, i, j-1)
    }
    i++
    j--
  }
  return true
};

function isReverseString (s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

console.log(validPalindrome("cuucu"))
