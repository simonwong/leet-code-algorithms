// 13. 罗马数字转整数
// https://leetcode-cn.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */

const romeMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,

  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

var romanToInt = function(s) {
  let num = 0
  s.replace(
    /(IV)|(IX)|(XL)|(XC)|(CD)|(CM)/g,
    (match) => {
      num += romeMap[match]
      return romeMap[match]
    }).replace(
    /(I)|(V)|(X)|(L)|(C)|(D)|(M)/g,
    (match) => {
      num += romeMap[match]
      return romeMap[match]
    })
  return num
};

console.log(romanToInt('MCMXCIV'))
