// 剑指 Offer 59 - II. 队列的最大值
// https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
class MaxQueue {
  private queue: number[]
  private deque: number[]

  constructor() {
    this.queue = []
    this.deque = []
  }

  max_value(): number {
    if (this.queue.length === 0) {
      return -1
    }
    return this.deque[0]
  }

  push_back(value: number): void {
    this.queue.push(value)

    const dq = this.deque
    while (dq.length > 0 && dq[dq.length - 1] < value) {
      this.deque.pop()
    }
    this.deque.push(value)
  }

  pop_front(): number {
    if (this.queue.length === 0) {
      return -1
    }
    const delVal = this.queue.shift()

    if (this.deque[0] === delVal) {
      this.deque.shift()
    }
    return delVal
  }
}


/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/
