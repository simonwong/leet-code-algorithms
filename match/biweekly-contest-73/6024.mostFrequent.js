/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  const numCount = {}
  let res = null
  let max = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === key && i < nums.length - 1) {
      const t = nums[i+1]
      numCount[t] = numCount[t] || 1
      numCount[t]++
      if (numCount[t] > max) {
        res = t
        max = numCount[t]
      }
    }
  }
  return res
};
mostFrequent([1,1], 1)
