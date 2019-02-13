/**
 * 寻找两个有序数组的中位数
 * 
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const cancatArray = nums1.concat(nums2).sort((a, b) => a - b)
    const length = cancatArray.length
    let median

    // 如果长度是偶数，那么取两数向加除以2
    if (length % 2 === 0) {
        const centerNextIndex = length / 2
        const centerPreIndex = centerNextIndex - 1

        median = (cancatArray[centerPreIndex] + cancatArray[centerNextIndex]) / 2
    
    // 长度是偶数，直接取中间的数
    } else {
        median = cancatArray[Math.floor(length / 2)]
    }
    
    return median
};


findMedianSortedArrays([3], [-2, -1])