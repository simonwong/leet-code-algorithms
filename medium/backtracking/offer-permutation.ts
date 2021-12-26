// 剑指 Offer 38. 字符串的排列
// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

function permutation(s: string): string[] {
  let ans: string[] = []

  const swap = (arr: string[], i: number, j: number) => {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  const dfs = (s: string[], x: number) => {
    if (x === s.length - 1) {
      ans.push(s.join(''))
      return
    }
    const swapDic = new Set<string>()
    for (let i = x; i < s.length; i++) {
      if (swapDic.has(s[i])) {
        continue
      }
      swapDic.add(s[i])
      swap(s, i, x)
      dfs(s, x + 1)
      swap(s, i, x)
    }
  }

  dfs(s.split(''), 0)

  return ans
};

permutation('kzfxxx')
