// 面试题 01.05. 一次编辑
// https://leetcode-cn.com/problems/one-away-lcci/
function oneEditAway(first: string, second: string): boolean {
  if (first === second) {
    return true
  }
  const fLen = first.length
  const sLen = second.length

  if (Math.abs(fLen - sLen) > 1) {
    return false
  }
  const isShort = first.length > second.length
  const isLong = first.length < second.length
  let isModify = false
  let i = 0
  let j = 0
  while (i < first.length) {
    if (first[i] === second[j]) {
      i++
      j++
      continue
    }

    if (isModify) {
      return false
    }
    // 尝试三种方式
    if (isShort) {
      i++
    } else if (isLong) {
      j++
    } else {
      i++
      j++
    }
    isModify = true
  }
  return true
};
console.log(oneEditAway("islander", "slander"))
