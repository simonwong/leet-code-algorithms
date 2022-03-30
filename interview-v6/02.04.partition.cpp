#include <stdlib.h>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};


class Solution {
public:
  ListNode* partition(ListNode* head, int x) {
    ListNode* smlDummy = new ListNode(-1);
    ListNode* bigDummy = new ListNode(-1);

    ListNode* sml = smlDummy;
    ListNode* big = bigDummy;

    while (head != nullptr) {
      if (head->val < x) {
        sml->next = head;
        sml = sml->next;
      } else {
        big->next = head;
        big = big->next;
      }
      head = head->next;
    }
    sml->next = bigDummy->next;
    big->next = nullptr;
    return smlDummy->next;
  }
};
