// 91. 解码方法
// https://leetcode-cn.com/problems/decode-ways/

// dp[i] 到 i 的位置，有几种解码
// dp[0] = 0; dp[1] = 1;

// dp[i] =
// 当前符合：dp[i-1] + 1
// 前后符合：dp[i-2] + 1

function numDecodings(s: string): number {
  const n = s.length
  const dp: number[] = new Array(n + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    if (s[i-1] !== '0') {
      dp[i] += dp[i-1]
    }
    if (i > 1 && s[i - 2] != '0' && (Number(s[i - 2]) * 10 + Number(s[i - 1]) <= 26)) {
      dp[i] += dp[i-2];
    }
  }
  return dp[n]
};
