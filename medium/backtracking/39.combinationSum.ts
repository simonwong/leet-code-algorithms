// 39. 组合总和
// https://leetcode-cn.com/problems/combination-sum/
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = []
  const dfs = (route: number[], idx: number, reset: number) => {
    if (reset < 0) {
      return
    }
    if (reset === 0) {
      ans.push([...route])
      return
    }

    for (let i = idx; i < candidates.length; i++) {
      const nextRest = reset - candidates[i]
      if (nextRest < 0) {
        continue
      }
      route.push(candidates[i])
      dfs(route, i, nextRest)
      route.pop()
    }
  }
  dfs([], 0, target)
  return ans
};
