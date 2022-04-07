// 面试题 03.04. 化栈为队
// https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/

#include <stack>
#include <iostream>

using namespace std;

class MyQueue {
private:
  stack<int> s1;
  stack<int> s2;
public:
  /** Initialize your data structure here. */
  MyQueue() {

  }

  /** Push element x to the back of queue. */
  void push(int x) {
    s1.push(x);
  }

  void trans () {
    if (s2.empty()) {
      while (!s1.empty()) {
        s2.push(s1.top());
        s1.pop();
      }
    }
  }

  /** Removes the element from in front of queue and returns that element. */
  int pop() {
    trans();
    int val = s2.top();
    s2.pop();
    return val;
  }

  /** Get the front element. */
  int peek() {
    trans();
    return s2.top();
  }

  /** Returns whether the queue is empty. */
  bool empty() {
    return s1.empty() && s2.empty();
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
