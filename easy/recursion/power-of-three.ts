// 326. 3的幂
// https://leetcode-cn.com/problems/power-of-three/
function isPowerOfThree(n: number): boolean {
  if (n === 1) {
    return true
  }
  const recursionCheck = (three: number) => {
    if (n < three) {
      return false
    }
    if (n === three) {
      return true
    }
    return recursionCheck(three * 3)
  }

  return recursionCheck(3)
};

