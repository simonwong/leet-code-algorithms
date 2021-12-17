// 剑指 Offer 64. 求1+2+…+n
// https://leetcode-cn.com/problems/qiu-12n-lcof/
function sumNums(n: number): number {
  return n > 0 && (sumNums(n - 1) + n)
};
