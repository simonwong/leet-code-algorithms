// 合并区间
// https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/1413/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const sorted = intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i-1];
    const cur = sorted[i];

    let res = isSp(prev, cur)
    if (res) {
      sorted.splice(i-1, 2, res)
      i -= 1
    }
  }
  console.log(sorted)
};

var isSp = (a, b) => {
  if (
    (a[1] >= b[0] && a[1] <= b[1]) ||
    (b[1] >= a[0] && b[1] <= a[1])
  ) {
    return [
      Math.min(a[0], b[0]),
      Math.max(a[1], b[1]),
    ]
  }
  return false
}

merge([[1,3],[2,6],[8,10],[15,18]])
