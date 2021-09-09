// 376. 摆动序列
// https://leetcode-cn.com/problems/wiggle-subsequence/


// dp[i] 表示在 i 这个位置的最长摆动序列
// [0] 0 表示当前是负的
// [1] 1 表示当前是正的

// dp[0][0] = 1
// dp[0][1] = 1

function wiggleMaxLength(nums: number[]): number {
  const n = nums.length
  if (n === 1) {
    return 1
  }
  let dpUp = 1
  let dpDown = 1

  for (let i = 1; i < n; i++) {
    let curUp: number, curDown: number
    if (nums[i] > nums[i-1]) {
      curUp = Math.max(dpUp, dpDown + 1)
      curDown = dpDown
    } else if (nums[i] < nums[i-1]) {
      curUp = dpUp
      curDown = Math.max(dpDown, dpUp + 1)
    } else {
      curUp = dpUp
      curDown = dpDown
    }
    dpUp = curUp
    dpDown = curDown
  }
  return Math.max(dpUp, dpDown)
};

wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])


function wiggleMaxLengthNormal(nums: number[]): number {
  const n = nums.length
  if (n === 1) {
    return 1
  }
  const dpUp: number[] = new Array(n).fill(1)
  const dpDown: number[] = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i-1]) {
      dpUp[i] = Math.max(dpUp[i-1], dpDown[i-1] + 1)
      dpDown[i] = dpDown[i-1]
    } else if (nums[i] < nums[i-1]) {
      dpUp[i] = dpUp[i-1]
      dpDown[i] = Math.max(dpDown[i-1], dpUp[i-1] + 1)
    } else {
      dpUp[i] = dpUp[i-1]
      dpDown[i] = dpDown[i-1]
    }
  }
  return Math.max(
    dpUp[n-1],
    dpDown[n-1],
  )
};
