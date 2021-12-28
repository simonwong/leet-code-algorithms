// 剑指 Offer 17. 打印从1到最大的n位数
// https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
function printNumbers(n: number): number[] {
  const ans: number[] = []
  const curArr = new Array(n)

  const dfs = (s: number) => {
    if (s === n) {
      let num = Number(curArr.join(''))
      if (num) {
        ans.push(num)
      }
      return
    }

    for (let i = 0; i <= 9; i++) {
      curArr[s] = `${i}`
      dfs(s + 1)
    }
  }
  dfs(0)
  return ans
};
