// 面试题 01.06. 字符串压缩
// https://leetcode-cn.com/problems/compress-string-lcci/
function compressString(S: string): string {
  let cur = S[0]
  let count = 1
  let ans = ''
  for (let i = 1; i < S.length; i++) {
    if (S[i] !== cur) {
      ans += cur + count
      cur = S[i]
      count = 1
    } else {
      count++
    }
  }
  ans += cur + count
  return ans.length < S.length ? ans : S
};
