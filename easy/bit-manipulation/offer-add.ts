// 剑指 Offer 65. 不用加减乘除做加法
// https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
function add(a: number, b: number): number {
  while (b !== 0) {
    const c = (a & b) << 1
    a ^= b
    b = c
  }
  return a
};

add(-3, 5)
