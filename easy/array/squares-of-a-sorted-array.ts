// 977. 有序数组的平方
// https://leetcode-cn.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums: number[]): number[] {
  const n = nums.length
  const ans: number[] = []

  let negative = -1
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negative = i
    } else {
      break
    }
  }

  let i = negative
  let j = negative + 1

  while (i >= 0 || j < n) {
    if (j < 0) {
      ans.push(nums[j] * nums[j])
      ++j
    } else if (j === n) {
      ans.push(nums[i] * nums[i])
      --i
    } else if (nums[i] * nums[i] < nums[j] * nums[j]) {
      ans.push(nums[i] * nums[i])
      --i
    } else {
      ans.push(nums[j] * nums[j])
      ++j
    }
  }
  return ans
};
