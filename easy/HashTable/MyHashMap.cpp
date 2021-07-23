// 706. 设计哈希映射
// https://leetcode-cn.com/problems/design-hashmap/

#include <iostream>
#include <vector>
#include <list>

using namespace std;

class MyHashMap {
private:
  vector<list<pair<int, int>>> data;
  static const int base = 2099;
  static int hash(int key) {
    return key % base;
  }

public:
    /** Initialize your data structure here. */
    MyHashMap(): data(base) {

    }

    /** value will always be non-negative. */
    void put(int key, int value) {
      int index = hash(key);

      for (auto it = data[index].begin(); it != data[index].end(); it++) {
        if ((*it).first == key) {
          (*it).second = value;
          return;
        }
      }
      data[index].push_back(make_pair(key, value));
    }

    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    int get(int key) {
      int index = hash(key);

      for (auto it = data[index].begin(); it != data[index].end(); it++) {
        if ((*it).first == key) {
          return (*it).second;
        }
      }
      return -1;
    }

    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    void remove(int key) {
      int index = hash(key);

      for (auto it = data[index].begin(); it != data[index].end(); it++) {
        if ((*it).first == key) {
          data[index].erase(it);
          return;
        }
      }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */
