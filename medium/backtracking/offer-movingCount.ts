// 剑指 Offer 13. 机器人的运动范围
// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
function movingCount(m: number, n: number, k: number): number {
  const map: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let ans = 0

  const isInArea = (i: number, j: number) => {
    const total = `${i}${j}`.split('').reduce((preTotal, curChat) => {
      return preTotal + Number(curChat)
    }, 0)

    return total <= k
  }

  const dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= m || j >= n || map[i][j] === 1) {
      return
    }

    if (isInArea(i, j)) {
      map[i][j] = 1
      ans++
      dfs(i + 1, j)
      dfs(i - 1, j)
      dfs(i, j - 1)
      dfs(i, j + 1)
    }
  }

  dfs(0, 0)

  return ans
};
