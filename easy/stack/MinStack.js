// 155. 最小栈
// https://leetcode-cn.com/problems/min-stack/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push([x])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const [number] = this.stack[this.stack.length - 1]
  return number
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = null
  this.stack.forEach(item => {
    let [current] = item
    if (min == null && current != null) {
      min = current
    } else if (current != null && current < min) {
      min = current
    }
  })

  return min
};

var minStack = new MinStack()
minStack.push(0)
minStack.push(5)
minStack.push(3)
console.log(minStack.pop())
console.log(minStack.top())
console.log(minStack.getMin())
// obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.getMin()
console.log(minStack)
