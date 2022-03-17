// 718. 最长重复子数组
// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
function findLength(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i + 1][j + 1] = nums1[i] === nums2[j] ? dp[i][j] + 1 : 0
      ans = Math.max(ans, dp[i + 1][j + 1])
    }
  }
  return ans
};
findLength([0,1,1,1,1], [1,0,1,0,1])
