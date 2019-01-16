/**
 * 两数之和
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 输入：nums = [2, 7, 11, 15], target = 9
 * 输出：[0, 1]
 * 
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
