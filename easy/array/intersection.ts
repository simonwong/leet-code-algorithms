// 349. 两个数组的交集
// https://leetcode-cn.com/problems/intersection-of-two-arrays/
function intersection(nums1: number[], nums2: number[]): number[] {
  let left = nums1
  let right = nums2
  if (nums2.length < nums1.length) {
    left = nums2
    right = nums1
  }
  const res: number[] = []
  const leftObj = {}
  for (let i = 0; i < left.length; i++) {
    leftObj[left[i]] = true
  }

  for (let i = 0; i < right.length; i++) {
    const val = right[i]
    if (leftObj[val]) {
      res.push(val)
      delete leftObj[val]
    }
  }
  return res
};
