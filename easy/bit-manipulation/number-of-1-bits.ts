// 191. 位1的个数
// https://leetcode-cn.com/problems/number-of-1-bits/
function hammingWeight(n: number): number {
  let ans = 0

  while (n) {
    n &= n - 1
    ans++
  }
  return ans
};
