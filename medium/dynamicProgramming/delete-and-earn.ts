// 740. 删除并获得点数
// https://leetcode-cn.com/problems/delete-and-earn/
// 打家劫舍变体
function robber(nums: number[]): number {
  const n = nums.length
  if (n <= 1) {
    return nums[0] || 0
  }
  let [dp_1, dp_2] = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 3; i <= n; i++) {
    [dp_1, dp_2] = [dp_2, Math.max(dp_1 + (nums[i - 1] * (i - 1)), dp_2)]
  }
  return dp_2
};


function deleteAndEarn(nums: number[]): number {
  const n = nums.length
  if (n <= 1) return nums[0] || 0

  let max = 0

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
  }
  const robberList: number[] = new Array(max + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    robberList[nums[i]] += 1
  }
  return robber(robberList)
};
