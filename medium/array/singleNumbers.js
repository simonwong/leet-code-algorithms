// 面试题56 - I. 数组中数字出现的次数
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let ret = 0

  for (let i = 0; i < nums.length; i++) {
    ret ^= nums[i]
  }

  let div = 1

  while ((div & ret) === 0) {
    div <<= 1
  }

  let a = 0, b = 0

  for (let i = 0; i < nums.length; i++) {
    if (div & nums[i]) {
      a ^= nums[i]
    } else {
      b ^= nums[i]
    }
  }
  return [a, b]
};

console.log(singleNumbers([4,1,4,6]))
