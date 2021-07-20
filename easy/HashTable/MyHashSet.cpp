// 705. 设计哈希集合
// https://leetcode-cn.com/problems/design-hashset/

#include <iostream>
#include<vector>
#include<list>

using namespace std;

class MyHashSet {
  private:
    vector<list<int>> data;
    static const int base = 769; // 取质数，减少哈希冲突
    static int hash(int key) {
      return key % base;
    }

  public:
    /** Initialize your data structure here. */
    MyHashSet(): data(base) {

    }

    void add(int key) {
      int index = hash(key);

      for (auto it = data[index].begin(); it != data[index].end(); it++) {
        if (*it == key) {
          return;
        }
      }
      data[index].push_back(key);
    }

    void remove(int key) {
      int index = hash(key);

      for (auto it = data[index].begin(); it != data[index].end(); it++) {
        if (*it == key) {
          data[index].erase(it);
          return;
        }
      }
    }

    /** Returns true if this set contains the specified element */
    bool contains(int key) {
      int index = hash(key);

      for (auto it = data[index].begin(); it != data[index].end(); it++) {
        if (*it == key) {
          return true;
        }
      }
      return false;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */
