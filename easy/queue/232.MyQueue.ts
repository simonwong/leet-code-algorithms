// 232. 用栈实现队列
// https://leetcode-cn.com/problems/implement-queue-using-stacks/

class Stack {
  data: number[]

  constructor () {
    this.data = new Array()
  }

  push (val: number) {
    this.data.push(val)
  }

  pop () {
    return this.data.pop()
  }

  peek () {
    return this.data[this.data.length - 1]
  }

  isEmpty () {
    return this.data.length === 0
  }
}

class MyQueue {
  stack_1: Stack
  stack_2: Stack

  constructor() {
    this.stack_1 = new Stack()
    this.stack_2 = new Stack()
  }

  push(x: number): void {
    this.stack_1.push(x)
  }

  transformData () {
    if (this.stack_2.isEmpty()) {
      while (!this.stack_1.isEmpty()) {
        this.stack_2.push(this.stack_1.pop())
      }
    }
  }

  pop(): number {
    this.transformData()
    return this.stack_2.pop()
  }

  peek(): number {
    this.transformData()
    return this.stack_2.peek()
  }

  empty(): boolean {
    return this.stack_1.isEmpty() && this.stack_2.isEmpty()
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
