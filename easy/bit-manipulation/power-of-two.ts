// 231. 2 的幂
// https://leetcode-cn.com/problems/power-of-two/
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0
};
