// 剑指 Offer 05. 替换空格
// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

function replaceSpace(s: string): string {
  let ans = ''
  let i = 0

  while (i < s.length) {
    ans += s.charCodeAt(i) === 32 ? '%20' : s.charAt(i)
    i++
  }
  return ans
};
