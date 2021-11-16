// 189. 轮转数组
// https://leetcode-cn.com/problems/rotate-array/
/**
 Do not return anything, modify nums in-place instead.
 */

const gcd = (x: number, y: number) => y ? gcd(y, x % y) : x

function rotate(nums: number[], k: number): void {
  const n = nums.length
  const t = k % n

  let count = gcd(t, n)

  for (let s = 0; s < count; s++) {
    let current = s
    let prev = nums[s]

    do {
      const next = (current + t) % n
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
    } while (s !== current)
  }
};
