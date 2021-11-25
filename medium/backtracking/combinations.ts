// 77. 组合
// https://leetcode-cn.com/problems/combinations/

function combine(n: number, k: number): number[][] {
  const ans: number[][] = []

  const arr = new Array(n).fill(0).map((item, index) => index + 1)

  const backtrack = (route: number[], start: number) => {
    if (route.length === k) {
      ans.push([...route])
    }

    for (let i = start; i < arr.length; i++) {
      route.push(arr[i])
      backtrack(route, i + 1)
      route.pop()
    }
  }

  backtrack([], 0)
  return ans
};

combine(4, 2)
