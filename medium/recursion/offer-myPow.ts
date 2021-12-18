// 剑指 Offer 16. 数值的整数次方
// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1
  }

  let ans = 1

  if (n < 0) {
    n = -n
    x = 1 / x
  }
  while (n >= 1) {
    if (n & 1) {
      ans *= x
    }
    x *= x
    n /= 2
  }
  return ans
};

myPow(2, 10)

