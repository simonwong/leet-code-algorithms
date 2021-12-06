// 剑指 Offer 10- I. 斐波那契数列
// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
function fib(n: number): number {
  if (n <= 1) {
    return n
  }
  let dp_0 = 0
  let dp_1 = 1

  for (let i = 2; i <= n; i++) {
    const next = (dp_0 + dp_1)  % 1000000007
    dp_0 = dp_1
    dp_1 = next
  }
  return dp_1
};
