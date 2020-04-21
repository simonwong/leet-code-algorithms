// 1248. 统计「优美子数组」
// https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const l = nums.length
  let odd = []
  let ans = 0
  let cnt = 0
  for (let i = 0; i < l; i++) {
    if (nums[i] & 1) {
      odd[++cnt] = i
    }
  }
  odd[0] = -1
  odd[++cnt] = l
  for (let i = 1; i + k <= cnt; i++) {
    ans += (odd[i] - odd[i - 1]) * (odd[i+k] - odd[i+k-1])
  }
  return ans
}

/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays_1 = function(nums, k) {
  let res = 0
  let count = 0
  let j = 0

  const isOdd = n => n % 2 !== 0
  const theArr = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    if (isOdd(nums[i])) {
      theArr[i] = nums[i]
    }
  }

  for (let i = 0; i < theArr.length; i++) {
    if (theArr[i]) {
      count += 1
    }
    if (count === k) {
      res += 1
    } else if (count > k) {
      j += 1
      i = j - 1
      count = 0
    }
    if (i === theArr.length - 1 && j < theArr.length - k) {
      j += 1
      i = j - 1
      count = 0
    }
  }
  return res
};

numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)
