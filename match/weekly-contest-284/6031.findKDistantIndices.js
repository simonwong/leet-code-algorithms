/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
  const jArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      jArr.push(i)
    }
  }
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    if (jArr.some(j => Math.abs(i - j) <= k)) {
      ans.push(i)
    }
  }
  return ans
};
findKDistantIndices([2,2,2,2,2], 2, 2)
