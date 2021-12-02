// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
function search(nums: number[], target: number): number {
  const n = nums.length - 1
  let s = 0
  let e = n
  let ts = -1
  while (s <= e) {
    const mid = s + ((e - s) >> 1)
    if (nums[mid] >= target) {
      e = mid - 1
      if (nums[mid] === target) {
        ts = mid
      }
    } else if (nums[mid] < target) {
      s = mid + 1
    }
  }
  if (ts === -1) {
    return 0
  }
  let ans = 0
  let i = ts
  while (i >= 0 && nums[i] === nums[ts]) {
    ans++
    i++
  }
  return ans
};
