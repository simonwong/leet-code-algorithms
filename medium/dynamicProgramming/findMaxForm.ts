// 474. 一和零
// https://leetcode-cn.com/problems/ones-and-zeroes/

// 存在「重叠子问题」
// 具备「最优子结构」
// 正确的「状态转移方程」
// 明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。
// # 初始化 base case
// dp[0][0][...] = base
// # 进行状态转移
// for 状态1 in 状态1的所有取值：
//     for 状态2 in 状态2的所有取值：
//         for ...
//             dp[状态1][状态2][...] = 求最值(选择1，选择2...)

function findMaxForm(strs: string[], m: number, n: number): number {
  const countArr: [number, number][] = strs.map(str => {
    let zero = 0
    let one = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        zero++
      } else if (str[i] === '1') {
        one++
      }
    }
    return [zero, one]
  })

  const dp: number[][] = Array(m+1).fill([]).map(() => Array(n+1).fill(0))
  // 状态转移方程
  // dp[i][j] = Max(dp[i][j], 1 + dp(i - countArr[k][0], j - countArr[k][1]))
  for (let k = 0; k < countArr.length; k++) {
    const zero = countArr[k][0]
    const one = countArr[k][1]
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(
          dp[i][j],
          1 + dp[i - zero][j - one]
        )
      }
    }
  }
  return dp[m][n]
};

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)
