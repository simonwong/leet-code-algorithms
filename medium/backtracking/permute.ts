// 46. 全排列
// https://leetcode-cn.com/problems/permutations/

/**
 * 通过 swap 原地交换
 */
function permute(nums: number[]): number[][] {
  const ans: number[][] = []
  const preRoute = [...nums]
  const routeGenerate = (route: number[], swapTimes: number) => {
    // 满足结束条件
    if (swapTimes === route.length) {
      ans.push([...route])
      return
    }
    // for 选择 in 选择列表
    for (let i = swapTimes; i < route.length; i++) {
      // 做选择（元素交换）
      ;[route[swapTimes], route[i]] = [route[i], route[swapTimes]]
      // 递归
      routeGenerate(route, swapTimes + 1)
      // 撤销（元素交换撤销）
      ;[route[swapTimes], route[i]] = [route[i], route[swapTimes]]
    }
  }

  routeGenerate(preRoute, 0)
  return ans
};

/**
 * 通过判断 route.contains(current) 这个判断，更加耗时
 */
function permuteByContains(nums: number[]): number[][] {
  const ans: number[][] = []

  const routeGenerate = (route: number[], selects: number[]) => {
    // 满足结束条件
    if (route.length === selects.length) {
      ans.push([...route])
      return
    }
    // for 选择 in 选择列表
    for (let i = 0; i < selects.length; i++) {
      const cur = selects[i];

      if (route.includes(cur)) {
        continue
      }
      // 做选择
      route.push(cur)
      // 递归
      routeGenerate(route, selects)
      // 撤销酸则
      route.pop()
    }
  }

  routeGenerate([], nums)

  return ans
};
