// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
// 剑指 Offer 09. 用两个栈实现队列
// TODO: 题目是要用两个 栈，我这里没用。。。
var CQueue = function() {
  this.data = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.data.push(value)
  return null
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  const ln = this.data.length
  if (ln === 0) {
    return -1
  }
  return this.data.shift()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
