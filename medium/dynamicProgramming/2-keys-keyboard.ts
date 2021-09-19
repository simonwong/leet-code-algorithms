// 650. 只有两个键的键盘
// https://leetcode-cn.com/problems/2-keys-keyboard/


// dp[i] 为输出i个数的最少操作

// 选择：copy+paste ， paste
// dp[0] = 0, dp[1] = 0

function minSteps(n: number): number {
  let ans = 0
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      n /= i
      ans += i
    }
  }

  if (n > 1) {
    ans += n
  }
  return ans
};

function minStepsByDp(n: number): number {
  const dp: number[] = new Array(n+1).fill(0)

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= j; j++) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[i] + i / j)
        dp[i] = Math.min(dp[i], dp[i / j] + j)
      }
    }
  }

  return dp[n]
};
