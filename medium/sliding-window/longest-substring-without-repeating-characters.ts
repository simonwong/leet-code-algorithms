// 3. 无重复字符的最长子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  if (s === '') {
    return 0
  }
  let i = 0
  let j = 0
  let obj = {}
  let ans = 0
  let count = 0
  while (j < s.length) {
    const cur = obj[s.charAt(j)]
    if (cur == null) {
      obj[s.charAt(j)] = j
      count++
      j++
    } else {
      // 这一块 j 的重置，导致了整体滑动速度下降了
      // 左边从 i 移到 cur+1 的过程是不能像下面一样省略的，得一次次滑动，移除 obj， count--
      ans = Math.max(ans, count)
      obj = {}
      i = cur+1
      j = i
      count = 0
    }
  }

  return Math.max(ans, count)
};
