// 326. 3的幂
// https://leetcode-cn.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return n > 0 && 5559060566555523 % n === 0
};

// 3 的 33 次方 为最大的 3 的幂次方
console.log(Number.MAX_SAFE_INTEGER, 3 ** 3)
console.log('5559060566555523'.length)
console.log('9007199254740991'.length)
