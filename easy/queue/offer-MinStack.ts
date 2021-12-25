// 剑指 Offer 30. 包含min函数的栈
// https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/

class MinStack {
  data: number[]
  minData: number[]

  constructor() {
    this.data = []
    this.minData = []
  }

  push(x: number): void {
    this.data.push(x)
    if (
      this.minData.length === 0 ||
      this.minData[this.minData.length - 1] >= x
    ) {
      this.minData.push(x)
    }
  }

  pop(): void {
    const popVal = this.data.pop()
    if (popVal === this.minData[this.minData.length - 1]) {
      this.minData.pop()
    }
  }

  top(): number {
    return this.data.length > 0 ? this.data[this.data.length - 1] : -1
  }

  min(): number {
    return this.minData.length > 0 ? this.minData[this.minData.length - 1] : -1
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/
