// 509. 斐波那契数
// https://leetcode-cn.com/problems/fibonacci-number/

/**
 * 状态压缩，因为每次只用到了 dp table 的最后两个
 */
 function fib(n: number): number {
  if (n === 0) return 0
  let dp_0 = 0
  let dp_1 = 1

  for (let i = 2; i <= n; i++) {
    const next = dp_0 + dp_1
    dp_0 = dp_1
    dp_1 = next
  }
  return dp_1
};


/**
 * 使用 dp table 存储
 */
function fibByDpTable(n: number): number {
  const dp = []
  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

/*
 * 借助 哈希表 存储结果，自顶向下
 */
function fibByHashTable(n: number): number {
  if (n < 1) {
    return 0;
  }

  const memo: { [key: string]: number } = {}

  const helper = (memo: { [key: string]: number }, N: number): number => {
    if (N == 0) {
      return 0;
    }
    if (N == 1 || N == 2) {
      return 1;
    }

    if (memo[N] != null) {
      return memo[N];
    }
    memo[N] = helper(memo, N - 1) + helper(memo, N - 2)
    return memo[N]
  }

  return helper(memo, n)
}

