// 剑指 Offer 09. 用两个栈实现队列
// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

class CQueue {
  stack_1: number[]
  stack_2: number[]

  constructor() {
    this.stack_1 = []
    this.stack_2 = []
  }

  appendTail(value: number): void {
    this.stack_1.push(value)
  }

  deleteHead(): number {
    while (this.stack_1.length > 0) {
      this.stack_2.push(this.stack_1.shift())
    }
    if (this.stack_2.length > 0) {
      return this.stack_2.shift()
    }
    return -1
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
