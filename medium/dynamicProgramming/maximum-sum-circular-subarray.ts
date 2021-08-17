// 918. 环形子数组的最大和
// https://leetcode-cn.com/problems/maximum-sum-circular-subarray/

// Kadane 算法
// 对于一个给定数组 A，Kadane 算法可以用来找到 A 的最大子段和
// Kadane 基于动态规划，
// dp[j] 为 A[j] 结尾的最大子段和，即 dp[j] = max(A[i] + A[i+1] +...+ A[j])
// 当子段为空，就等于 0。
// dp[j+1] = A[j+1] + max(dp[i], 0)

// [1,2,-4,4,-5,0]
// 1,3,-1,4,-1,0
// #Kadane's algorithm
// ans = cur = 0
// for x in A:
//     cur = x + max(cur, 0)
//     ans = max(ans, cur)
// return ans

function kadane (A: number[], start: number, end: number, sign: number): number {
  let ans: number = Number.MIN_SAFE_INTEGER
  let cur: number = Number.MIN_SAFE_INTEGER

  for (let i = start; i <= end; i++) {
    cur = sign * A[i] + Math.max(cur, 0)
    ans = Math.max(ans, cur)
  }
  return ans
}

function maxSubarraySumCircular(nums: number[]): number {
  // nums 求和
  const S = nums.reduce((pre, cur) => (pre + cur), 0)
  const n = nums.length
  const ans1 = kadane(nums, 0, n - 1, 1)
  // 对于双区间子段，B 是 nums 所有元素乘以 -1 的结果，那么结果是 S + kadane(B)
  const ans2 = S + kadane(nums, 1, n - 1, -1)
  const ans3 = S + kadane(nums, 0, n - 2, -1)

  return Math.max(ans1, Math.max(ans2, ans3))
};
