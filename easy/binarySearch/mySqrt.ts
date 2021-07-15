// 69. x 的平方根
// https://leetcode-cn.com/problems/sqrtx/
function mySqrt(x: number): number {
  let low = 0
  let high = x
  while (low <= high) {
    const mid = low + ((high - low) >> 1)

    if (mid * mid > x) {
      high = mid - 1
    } else {
      if ((mid + 1) * (mid + 1) > x) {
        return mid
      }
      low = mid + 1
    }
  }
};
