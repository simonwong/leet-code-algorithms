// 面试题64. 求1+2+…+n
// https://leetcode-cn.com/problems/qiu-12n-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  return n && (n + sumNums(n-1))
};
