// 1. 两数之和
// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const cmp = target - nums[i]

    if (hashMap.has(cmp)) {
      return [hashMap.get(cmp), i]
    }
    hashMap.set(nums[i], i)
  }
};

twoSum([3, 2, 3], 6) // ==> [0, 2]
