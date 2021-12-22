// 剑指 Offer 57 - II. 和为s的连续正数序列
// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
function findContinuousSequence(target: number): number[][] {
  const ans: number[][] = []

  for (let l = 1, r = 2; l < r;) {
    let sum = (l + r) * (r - l + 1) / 2
    if (sum === target) {
      let res: number[] = []
      for (let i = l; i <= r; i++) {
        res.push(i)
      }
      ans.push(res)
      l++
    } else if (sum < target) {
      r++
    } else {
      l++
    }
  }

  return ans
};
