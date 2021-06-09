// 53. 最大子序和
// https://leetcode-cn.com/problems/maximum-subarray/

/**
 * 分治
 * 线段树
 */
class Status {
  lSum: number
  rSum: number
  mSum: number
  iSum: number
  constructor (l: number, r: number, m: number, i: number) {
    this.lSum = l //  [l,r] 内以 l 为左端点的最大子段和
    this.rSum = r //  [l,r] 内以 r 为左端点的最大子段和
    this.mSum = m //  [l,r] 内的最大子段和
    this.iSum = i //  [l,r] 的区间和
  }
}

function pushUp (left: Status, right: Status): Status {
  const lSUm = Math.max(left.lSum, left.iSum + right.lSum) // TODO: 不是很理解
  const rSum = Math.max(left.rSum, left.iSum + right.rSum) // TODO: 不是很理解
  const mSum = Math.max(
    Math.max(left.mSum, right.mSum),
    left.rSum + right.lSum // TODO: 不是很理解
  )
  const iSum = left.iSum + right.iSum

  return new Status(lSUm, rSum, mSum, iSum)
}

function getInfo (a: number[], l: number, r: number): Status {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l])
  }
  const m = (l + r) >> 1
  const lSub = getInfo(a, l, m)
  const rSub = getInfo(a, m + 1, r)
  return pushUp(lSub, rSub)
}

function maxSubArray(nums: number[]): number {
  return getInfo(nums, 0, nums.length - 1).mSum
};

/**
 * 动态规划解法 - dp 压缩
 */
function maxSubArray_dp_compress(nums: number[]): number {
  let pre: number = 0
  let ans = Number.MIN_SAFE_INTEGER

  for (let i = 1; i <= nums.length; i++) {
    pre = Math.max(
      nums[i-1],
      pre + nums[i-1]
    )
    ans = Math.max(ans, pre)
  }

  return ans
};
/**
 * 动态规划解法
 * dp[0] = 0
 * dp[1] = nums[0]
 * dp[i] = Math.max(nums[i-1], dp[i-1] + nums[i-1])
 */
function maxSubArray_by_dp(nums: number[]): number {
  const len = nums.length
  const dp: number[] = Array(len+1).fill(0)
  let ans = Number.MIN_SAFE_INTEGER

  for (let i = 1; i <= nums.length; i++) {
    dp[i] = Math.max(
      nums[i-1],
      dp[i-1] + nums[i-1]
    )
    ans = Math.max(ans, dp[i])
  }

  return ans
};
