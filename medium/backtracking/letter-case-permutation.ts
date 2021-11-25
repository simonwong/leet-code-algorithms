// 784. 字母大小写全排列
// https://leetcode-cn.com/problems/letter-case-permutation/
function letterCasePermutation(s: string): string[] {
  const ans: string[] = []

  const backTrack = (route: string, times: number) => {
    if (s.length === times) {
      ans.push(route)
      return
    }

    if (/[a-zA-Z]/.test(s[times])) {
      backTrack(route + s[times].toLowerCase(), times + 1)
      backTrack(route + s[times].toUpperCase(), times + 1)
    } else {
      backTrack(route + s[times], times + 1)
    }
  }

  backTrack('', 0)
  return ans
};
