// 4. 寻找两个有序数组的中位数
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays
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
