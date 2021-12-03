// 剑指 Offer 11. 旋转数组的最小数字
// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
function minArray(numbers: number[]): number {
  let i = 0
  let j = numbers.length - 1

  // 表示没有旋转过
  if (numbers[j] > numbers[i]) {
    return numbers[i]
  }

  while (i < j) {
    const mid = (j + i) >> 1

    if (numbers[j] > numbers[mid]) {
      j = mid
    } else if (numbers[j] < numbers[mid]) {
      i = mid + 1
    } else {
      j--
    }
  }
  return numbers[i]
};
