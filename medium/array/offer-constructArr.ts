// 剑指 Offer 66. 构建乘积数组
// https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/
function constructArr(a: number[]): number[] {
  const len = a.length
  const pre: number[] = new Array(len + 1).fill(1)
  const after: number[] = new Array(len + 1).fill(1)
  const ans: number[] = new Array(len)

  for (let i = 0; i < len; i++) {
    pre[i+1] = pre[i] * a[i]
  }
  for (let i = len - 1; i >= 0; i--) {
    after[i] = after[i+1] * a[i]
  }
  for (let i = 0; i < len; i++) {
    ans[i] = pre[i] * after[i+1]
  }
  return ans
};

// [1,2,3,4,5]

// [120,60,40,30,24]

// [1, 1, 2, 6, 24, 120]

// [120, 120, 60, 20, 5, 1]
