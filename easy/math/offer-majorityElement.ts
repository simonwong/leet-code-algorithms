// 剑指 Offer 39. 数组中出现次数超过一半的数字
// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
function majorityElement(nums: number[]): number {
  const bucket = []
  for (const n of nums) {
    bucket[n] = bucket[n] || 0
    bucket[n]++

    if (bucket[n] > (nums.length >> 1)) {
      return n
    }
  }
  return null
};

// 摩尔投票法（必须占一半以上）
// 可以理解为俩俩相抵消，最后剩下的一定是多数人
// （如果不占一半以上，俩俩相抵消后，最后剩下的就比较随机了）
// function majorityElement(nums: number[]): number {
//   let count = 0
//   let res = 0

//   for (const n of nums) {
//     if (count === 0) {
//       res = n
//     }
//     count += (res === n ? 1 : -1)
//   }
//   return res
// };
