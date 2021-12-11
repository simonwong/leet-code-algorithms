// 剑指 Offer 57. 和为s的两个数字
// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
function twoSum(nums: number[], target: number): number[] {
  let i = 0
  let j = 0

  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--
    } else if (nums[i] + nums[j] > target) {
      i++
    } else {
      return [nums[i], nums[j]]
    }
  }
  return null
};



// function twoSum(nums: number[], target: number): number[] {
//   const endObj: Record<string, number> = {}

//   for (let i = 0; i < nums.length; i++) {
//     endObj[nums[i]] = i
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (endObj[target - nums[i]] != null) {
//       return [nums[i], target - nums[i]]
//     }
//   }
//   return null
// };


// [10,25,30,31,47,60] 56


