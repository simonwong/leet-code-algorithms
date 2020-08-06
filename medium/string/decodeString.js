// 394. 字符串解码
// https://leetcode-cn.com/problems/decode-string/
/**
 * 使用正则 + 递归的方式，还有其他优秀的解答方案
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const encodeGroupReg = /(\d+\[[a-zA-Z]+\])/g
  const matchRes = s.replace(encodeGroupReg, (matchStr) => {
    const str = matchStr.match(/[a-zA-Z]+/)[0]
    const times = matchStr.match(/\d+/)[0]
    return str.repeat(times)
  })
  if (encodeGroupReg.test(matchRes)) {
    return decodeString(matchRes)
  }
  return matchRes
};

console.log(decodeString('2[ab4[A]c]ef'))
