// 剑指 Offer 51. 数组中的逆序对
// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
function reversePairs(nums: number[]): number {
  let ans = 0

  function merge (l: number, m: number, r: number) {
    let i = l
    let j = m + 1
    const res = []
    while (i <= m && j <= r) {
      if (nums[i] <= nums[j]) {
        res.push(nums[i++])
      } else {
        res.push(nums[j++])
        ans += (m - i + 1)
      }
    }
    while (i <= m) {
      res.push(nums[i++])
    }
    while (j <= r) {
      res.push(nums[j++])
    }

    for (let k = 0; k < res.length; k++) {
      nums[k+l] = res[k]
    }
  }

  function mergeSort(l: number, r: number) {
    if (l >= r) {
      return
    }
    const m = (l + r) >> 1
    mergeSort(l, m)
    mergeSort(m + 1, r)
    merge(l, m, r)
  }

  mergeSort(0, nums.length - 1)
  return ans
};
// reversePairs([7,3,2,6,0,1,5,4])
