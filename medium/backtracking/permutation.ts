// 剑指 Offer 38. 字符串的排列
// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
function permutation(s: string): string[] {
  const ans: Set<string> = new Set()

  backtrack(s.split(''), 0, ans)
  return Array.from(ans)
};

function backtrack(route: string[], swapTimes: number ,ans: Set<string>) {
  if (route.length === swapTimes) {
    ans.add(route.join(''))
  }

  for (let i = swapTimes; i < route.length; i++) {
    swap(route, swapTimes, i)
    backtrack(route, swapTimes + 1, ans)
    swap(route, swapTimes, i)
  }
}

function swap (arr: string[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
