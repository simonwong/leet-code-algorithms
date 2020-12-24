
// 面试题 08.05. 递归乘法
// https://leetcode-cn.com/problems/recursive-mulitply-lcci/
const multiply = function (A, B) {
  // 减少递归次数
  if (A > B) {
    return calculate(B, A)
  }
  return calculate(A, B)
}

const calculate = function (a, b) {
  if (a == 0) {
    return 0
  }
  if (a == 1) {
    return b
  }
  const halfA = a >> 1
  const halfAResult = calculate(halfA, b)
  return halfAResult + halfAResult + (a % 2 == 1 ? b : 0);
}

/**
 * 无脑的递归相加（数字过大时会堆栈溢出）
 */
const multiplyRecursionAdd = function(A, B) {
  if (A === 0) {
    return 0
  }
  return B + multiply(A - 1, B)
}
