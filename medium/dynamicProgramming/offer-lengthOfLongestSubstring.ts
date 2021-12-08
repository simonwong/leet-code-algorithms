// 剑指 Offer 48. 最长不含重复字符的子字符串
// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

// dp[i] 表示 s[i] 结尾的字符串 最长....
// i-j 可以表示 (i, j] 为一个无重复的子串
// dp[i] = {
//   dp[i-1] + 1 // dp[i-1] < i-j
//   i-j // dp[i-1] >= i-j
// }

export function lengthOfLongestSubstring(s: string): number {
  const obj: Record<string, number> = {}
  let ans = 0
  let dp = 0

  for (let i = 0; i < s.length; i++) {
    const j = obj[s.charAt(i)] ?? -1
    obj[s.charAt(i)] = i
    dp = dp < i - j  ? dp + 1 : i - j
    ans = Math.max(ans, dp)
  }
  return ans
};

lengthOfLongestSubstring('abcabcbb')
