// 567. 字符串的排列
// https://leetcode-cn.com/problems/permutation-in-string/
function checkInclusion(s1: string, s2: string): boolean {
  const n = s1.length, m = s2.length
  if (n > m) {
    return false
  }
  const cnt = new Array(26).fill(0)
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  let left = 0
  for (let right = 0; right < m; ++right) {
    const x = s2[right].charCodeAt(0) - 'a'.charCodeAt(0)
    ++cnt[x]
    while (cnt[x] > 0) {
      --cnt[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]
      ++left
    }
    if (right - left + 1 === n) {
      return true
    }
  }
  return false
}
