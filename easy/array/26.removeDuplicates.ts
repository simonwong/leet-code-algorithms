function removeDuplicates(nums: number[]): number {
  let j = 0 // 慢指针
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i]
    }
  }
  return j + 1
};
