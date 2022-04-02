// 面试题 03.01. 三合一
// https://leetcode-cn.com/problems/three-in-one-lcci/

#include <vector>
#include <iostream>

class TripleInOne {
private:
  std::vector<int> arr;
  int size[3] = {0, 0, 0};
  int maxSize;
public:
  TripleInOne(int stackSize) {
    arr = std::vector<int>(stackSize * 3, 0);
    maxSize = stackSize;
  }

  void push(int stackNum, int value) {
    if (size[stackNum] < maxSize) {
      arr[getLatestIdx(stackNum) + 1] = value;
      size[stackNum] += 1;
    }
  }

  int pop(int stackNum) {
    if (isEmpty(stackNum)) {
      return -1;
    }
    int idx = getLatestIdx(stackNum);
    int val = arr[idx];
    arr[idx] = 0;
    size[stackNum] -= 1;

    return val;
  }

  int peek(int stackNum) {
    if (isEmpty(stackNum)) {
      return -1;
    }
    return arr[getLatestIdx(stackNum)];
  }

  int getLatestIdx(int stackNum) {
    return stackNum * maxSize + size[stackNum] - 1;
  }

  bool isEmpty(int stackNum) {
    return size[stackNum] == 0;
  }
};

// {1,2,3}
// 10 * 1 + 2  12-1 = 11

// 10 * 0 + 1  1-1 = 0

// 0,1,2,3,4,5,6,7,8,9,10,11
//
/**
 * Your TripleInOne object will be instantiated and called as such:
 *
 */
// int main () {
//   TripleInOne* obj = new TripleInOne(1);
//   obj->push(0, 1);
//   obj->push(0, 2);
//   int param_1 = obj->peek(0);
//   std::cout << "param_1: " <<  param_1 <<  std::endl;
//   int param_2 = obj->pop(0);
//   std::cout << "param_2: " <<  param_2 <<  std::endl;
//   int param_3 = obj->pop(0);
//   std::cout << "param_3: " <<  param_3 <<  std::endl;
//   int param_4 = obj->pop(0);
//   std::cout << "param_4: " <<  param_4 <<  std::endl;
//   bool param_5 = obj->isEmpty(0);
//   std::cout << "param_5: " <<  param_5 <<  std::endl;

//   return 0;
// }
