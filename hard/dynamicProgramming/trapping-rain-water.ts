// 42. 接雨水
// https://leetcode-cn.com/problems/trapping-rain-water/

/**
 * 通过栈实现
 */
function trapByStack(height: number[]): number {
  const stack: number[] = []
  let ans: number = 0
  let n = height.length
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (stack.length === 0) {
        break
      }
      const left = stack[stack.length - 1]
      const wh = i - left - 1
      const ht = Math.min(height[left], height[i]) - height[top]
      ans += wh * ht
    }
    stack.push(i)
  }
  return ans
};
