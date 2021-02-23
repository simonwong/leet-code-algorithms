// 1052. 爱生气的书店老板
// https://leetcode-cn.com/problems/grumpy-bookstore-owner/
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let left = 0
  let right = X - 1

  let danRes = 0
  let res = 0
  customers.forEach((num, index) => {
    const isAngry = !!grumpy[index]
    if (index >= left && index <= right) {
      danRes += num
    } else if (!isAngry) {
      danRes += num
    }
  })
  res = danRes

  if (X === 0) return res

  while (right < customers.length - 1) {
    const prevLeft = left

    left++
    right++

    if (grumpy[prevLeft]) {
      danRes -= customers[prevLeft]
    }
    if (grumpy[right]) {
      danRes += customers[right]
    }
    res = Math.max(res, danRes)
  }
  return res
};
