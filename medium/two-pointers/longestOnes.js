// 1004. 最大连续1的个数 III
// https://leetcode-cn.com/problems/max-consecutive-ones-iii/

// 思路
// 双指针，初始化 left = right = 0，[left, right)
// 不断 right + 1，遇到 0 ，count++
// 当 count > k ，满足当前的窗口条件，
// 不断 left + 1，如果遇到 0 且 k < 初始k，count--，回去重复 上述步骤

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let left = 0
  let right = 0
  let res = 0
  let kNum = 0
  while (right < A.length) {
    if (A[right] === 0) {
      kNum++
    }
    while (kNum > K) {
      if (A[left++] === 0) {
        kNum--
      }
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
};

longestOnes([1,1,1,0,0,0,1,1,1,1,0], 1)
