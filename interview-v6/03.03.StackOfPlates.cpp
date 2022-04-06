// 面试题 03.03. 堆盘子
// https://leetcode-cn.com/problems/stack-of-plates-lcci/

#include <vector>
#include <stack>

using namespace std;

class StackOfPlates {
private:
  vector<stack<int>> data;
  int max;
public:
  StackOfPlates(int cap) {
    max = cap;
  }

  void push(int val) {
    if (max == 0) {
      return;
    }
    if (data.empty() || data.back().size() == max) {
      data.emplace_back(stack<int>());
    }
    data.back().push(val);
  }

  int pop() {
    if (max == 0 || data.empty()) {
      return -1;
    }
    int val = data.back().top();
    data.back().pop();
    if (data.back().empty()) {
      data.pop_back();
    }
    return val;
  }

  int popAt(int index) {
    if (max == 0 || index >= data.size() || data[index].empty()) {
      return -1;
    }
    int val = data[index].top();
    data[index].pop();
    if (data[index].empty()) {
      data.erase(data.begin() + index);
    }
    return val;
  }
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * StackOfPlates* obj = new StackOfPlates(cap);
 * obj->push(val);
 * int param_2 = obj->pop();
 * int param_3 = obj->popAt(index);
 */
