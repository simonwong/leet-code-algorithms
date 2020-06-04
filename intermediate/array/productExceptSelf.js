// 238. 除自身以外数组的乘积
// https://leetcode-cn.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const lA = [1]
  const rA = [1]
  for (let i = 0; i < nums.length - 1; i++) {
    lA.push(lA[lA.length - 1] * nums[i])
  }
  for (let i = nums.length - 1; i > 0; i--) {
    rA.unshift(rA[0] * nums[i])
  }

  return nums.map((item, i) => {
    return lA[i] * rA[i]
  })
};


console.log(productExceptSelf([1,2,3,4]))
