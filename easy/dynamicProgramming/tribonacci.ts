// 1137. 第 N 个泰波那契数
// https://leetcode-cn.com/problems/n-th-tribonacci-number/
function tribonacci(n: number): number {
  if (n === 0) return 0
  if (n <= 2) return 1

  let t0 = 0
  let t1 = 1
  let t2 = 1

  for (let i = 3; i <= n; i++) {
    const next = t0 + t1 + t2
    t0 = t1
    t1 = t2
    t2 = next
  }
  return t2
};
