// 45. 跳跃游戏 II
// https://leetcode-cn.com/problems/jump-game-ii/
function jump(nums: number[]): number {
  let ans = 0
  let end = 0
  let maxPos = 0
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, i + nums[i])

    if (i === end) {
      end = maxPos
      ans++
    }
  }
  return ans
};
