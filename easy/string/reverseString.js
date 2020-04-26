// 344. 反转字符串
// https://leetcode-cn.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
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

reverseString(["H","a","n","n","a","h"])
