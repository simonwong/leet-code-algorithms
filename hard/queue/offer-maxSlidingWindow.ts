// 剑指 Offer 59 - I. 滑动窗口的最大值
// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
function maxSlidingWindow(nums: number[], k: number): number[] {
  if (k <= 1) {
    return nums
  }
  const ans: number[] = []
  const queue: number[] = []

  let i = -k + 1
  let j = 0

  while (j < nums.length) {
    if (i > 0 && queue[0] === nums[i-1]) {
      queue.shift()
    }
    while (queue.length > 0 && queue[queue.length - 1] < nums[j]) {
      queue.pop()
    }
    queue.push(nums[j])
    if (i >= 0) {
      ans.push(queue[0])
    }
    i++
    j++
  }
  return ans
};

maxSlidingWindow([1,3,1,2,0,5], 3)
