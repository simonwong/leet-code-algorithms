// 371. 两整数之和
// https://leetcode-cn.com/problems/sum-of-two-integers/
function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1
    a = a ^b
    b = carry
  }
  return a
};
