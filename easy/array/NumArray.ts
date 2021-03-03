// 303. 区域和检索 - 数组不可变
// https://leetcode-cn.com/problems/range-sum-query-immutable/

// 前缀和
class NumArray {
  private dp: number[] = []
  constructor(nums: number[]) {
    this.dp[0] = nums[0]
    for (let i = 0; i < nums.length; i++) {
      this.dp[i+1] = this.dp[i] + nums[i]
    }
  }

  sumRange(i: number, j: number): number {
    return this.dp[j+1] - this.dp[i]
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(0, 2)
var param_2 = obj.sumRange(2, 5)
var param_3 = obj.sumRange(0, 5)

console.log(obj)
console.log(param_1)
console.log(param_2)
console.log(param_3)
