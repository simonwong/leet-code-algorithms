// 88. 合并两个有序数组
// https://leetcode-cn.com/problems/merge-sorted-array/
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index_1 = m - 1
  let index_2 = n - 1
  let total = m + n - 1
  let current
  while (index_1 >= 0 || index_2 >= 0) {
    if (index_1 === -1) {
      current = nums2[index_2--]
    } else if (index_2 === -1) {
      current = nums1[index_1--]
    } else if (nums1[index_1] > nums2[index_2]) {
      current = nums1[index_1--]
    } else {
      current = nums2[index_2--]
    }
    nums1[total--] = current
  }
}
