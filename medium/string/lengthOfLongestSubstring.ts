// 3. 无重复字符的最长子串
// 窗口滑动
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  if (s === '') return 0

  let currentUsed: Set<string> = new Set()
  let res: number = 0
  let rk = -1

  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      currentUsed.delete(s.charAt(i - 1))
    }

    while (rk + 1 < s.length && !currentUsed.has(s.charAt(rk + 1))) {
      currentUsed.add(s.charAt(rk + 1))
      rk++
    }

    res = Math.max(res, rk - i + 1)
  }

  return res
};
