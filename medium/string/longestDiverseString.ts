// 1405. 最长快乐字符串
// https://leetcode-cn.com/problems/longest-happy-string/
function longestDiverseString(a: number, b: number, c: number): string {
  const arr = [{ t: 'a', v: a }, { t: 'b', v: b }, { t: 'c', v: c }]
  let ans = ''

  while (true) {
    arr.sort((a, b) => (b.v - a.v))

    let hasNext = false

    for (let i = 0; i < arr.length; i++) {
      const { v, t } = arr[i]

      if (v <= 0) {
        break
      }

      const len = ans.length
      if (ans.length >= 2 && ans[len - 1] === t && ans[len - 2] === t) {
        continue
      }
      hasNext = true
      ans += t
      arr[i].v --
      break
    }

    if (!hasNext) {
      break
    }
  }
  return ans
};

console.log(longestDiverseString(1, 1, 7));
