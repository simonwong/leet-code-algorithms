// 面试题 03.02. 栈的最小值
// https://leetcode-cn.com/problems/min-stack-lcci/

#include <stack>

using namespace std;

class MinStack {
private:
  stack<int> minStack;
  stack<int> valStack;
public:
  /** initialize your data structure here. */
  MinStack() {
  }

  void push(int x) {
    valStack.push(x);
    if (minStack.empty() || x <= minStack.top()) {
      minStack.push(x);
    }
  }

  void pop() {
    int top = valStack.top();
    valStack.pop();
    if (!minStack.empty() && minStack.top() == top) {
      minStack.pop();
    }
  }

  int top() {
    return valStack.top();
  }

  int getMin() {
    return minStack.top();
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */

// 5,3,2,7,1,2
