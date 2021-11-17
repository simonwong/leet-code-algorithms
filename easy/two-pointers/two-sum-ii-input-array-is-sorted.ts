// 167. 两数之和 II - 输入有序数组
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum(numbers: number[], target: number): number[] {
  let s = 0
  let e = numbers.length - 1

  while (s < e) {
    const res = numbers[s] + numbers[e]
    if (res === target) {
      return [s + 1, e + 1]
    }
    if (res > target) {
      e--
    } else {
      s++
    }
  }
  return [-1, -1]
};
