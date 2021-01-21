// 最长公共前缀
// https://leetcode-cn.com/leetbook/read/array-and-string/ceda1/
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  let res = ''
  let mL = Number.MAX_SAFE_INTEGER
  strs.forEach(str => {
    mL = Math.min(str.length, mL)
  })

  for (let i = 0; i < mL; i++) {
    const fs = strs[0][i]
    let flag = true
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== fs) {
        flag = false
      }
    }
    if (flag) {
      res += fs
    } else {
      break
    }
  }

  return res
}
