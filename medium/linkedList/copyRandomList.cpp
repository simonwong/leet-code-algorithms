// 138. 复制带随机指针的链表
// https://leetcode-cn.com/problems/copy-list-with-random-pointer/

#include <iostream>

using namespace std;

class Node {
public:
  int val;
  Node* next;
  Node* random;

  Node(int _val) {
    val = _val;
    next = NULL;
    random = NULL;
  }
};

class Solution {
public:
  Node* copyRandomList(Node* head) {
    if (head == NULL) {
      return NULL;
    }

    Node *cur = head;

    // 循环复刻 next
    while (cur != NULL) {
      Node *next = new Node(cur->val);
      Node *oldNext = cur->next;
      cur->next = next;
      next->next = oldNext;
      cur = oldNext;
    }

    cur = head;
    // 循环复刻 radom
    while (cur != NULL) {
      Node *next = cur->next;
      next->random = cur->random == NULL ? NULL : cur->random->next;
      cur = cur->next->next;
    }

    Node *res = head->next;
    cur = head;

    // 分离
    while (cur != NULL) {
      Node *next = cur->next;
      cur->next = next->next;
      next->next = cur->next == NULL ? NULL : cur->next->next;
      cur = cur->next;
    }
    return res;
  }
};
