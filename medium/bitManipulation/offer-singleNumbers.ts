// 剑指 Offer 56 - I. 数组中数字出现的次数
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
function singleNumbers(nums: number[]): number[] {
  let ret: number = 0
  for (const num of nums) {
    ret ^= num
  }
  let div = 1
  while ((div & ret) === 0) {
    div <<= 1
  }
  let a = 0
  let b = 0
  for (const num of nums) {
    if (div & num) {
      a ^= num
    } else {
      b ^= num
    }
  }

  return [a, b]
};

singleNumbers([4,1,1,3,4,6])
