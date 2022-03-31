// 面试题 02.05. 链表求和
// https://leetcode-cn.com/problems/sum-lists-lcci/
#include <stdlib.h>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};


class Solution {
public:
  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode* ans = new ListNode(-1);
    ListNode* empty = new ListNode(-1);

    int carry = 0;
    ListNode* cur = ans;
    while (l1 != nullptr || l2 != nullptr) {
      int v1 = l1 ? l1->val : 0;
      int v2 = l2 ? l2->val : 0;
      int val = v1 + v2 + carry;
      if (val >= 10) {
        carry = 1;
        val = val - 10;
      } else {
        carry = 0;
      }
      cur->next = new ListNode(val);
      cur = cur->next;
      l1 = l1 ? l1->next : nullptr;
      l2 = l2 ? l2->next : nullptr;
    }
    if (carry) {
      cur->next = new ListNode(carry);
    }

    return ans->next;
  }
};
