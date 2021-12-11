// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
function exchange(nums: number[]): number[] {
  let i = 0 // slow
  let j = 0 // quick

  while (j < nums.length) {
    // 偶数
    if (nums[j] % 2 === 0) {
      j++
    } else {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      i++
      j++
    }
  }
  return nums
};
