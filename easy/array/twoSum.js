// 1. 两数之和
// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    const hashMap = {}

    nums.forEach((num, index) => {
        const complement = target - num
        // 这里是为了判断，当前值对应的另一个值是否存在hashMap中
        if (hashMap.hasOwnProperty(complement)) {
            result = [hashMap[complement], index]
        }
        hashMap[num] = index
    })

    return result
};

twoSum([3, 2, 3], 6) // ==> [0, 2]
