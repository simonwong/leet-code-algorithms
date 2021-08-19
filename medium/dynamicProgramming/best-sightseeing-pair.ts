// 1014. 最佳观光组合
// https://leetcode-cn.com/problems/best-sightseeing-pair/

// 将得分公式  values[i] + values[j] + i - j
// 拆分成 values[i] + i 和 values[j] - j

function maxScoreSightseeingPair(values: number[]): number {
  let left = values[0]
  let ans: number = 0
  for (let i = 1; i < values.length; i++) {
    ans = Math.max(ans, left + values[i] - i)
    left = Math.max(left, values[i] + i)
  }
  return ans
};
