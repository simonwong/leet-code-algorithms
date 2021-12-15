// 剑指 Offer 61. 扑克牌中的顺子
// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
function isStraight(nums: number[]): boolean {
  const noZero = nums.sort((a, b) => a - b).filter(num => num !== 0)
  for (let i = 0; i < noZero.length - 1; i++) {
    if (noZero[i] === noZero[i+1]) {
      return false
    }
  }

  return noZero[noZero.length - 1] - noZero[0] < 5
};

isStraight([10,11,0,12,6])
