// 2006. 差的绝对值为 K 的数对数目
// https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/
function countKDifference(nums: number[], k: number): number {
  const countArr: number[] = []
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    countArr[nums[i]] |= 0
    countArr[nums[i]]++
  }

  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] && countArr[i + k]) {
      ans += countArr[i] * countArr[i + k]
    }
  }
  return ans
};

countKDifference([3,2,1,5,4], 2)
