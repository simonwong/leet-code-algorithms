// 面试题 02.08. 环路检测
// https://leetcode-cn.com/problems/linked-list-cycle-lcci/
#include <stdlib.h>
#include <unordered_set>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
  ListNode *detectCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast != nullptr) {
      slow = slow->next;
      if (fast->next == nullptr) {
        return nullptr;
      }
      fast = fast->next->next;

      if (slow == fast) {
        ListNode *ptr = head;
        while (ptr != slow) {
          ptr = ptr->next;
          slow = slow->next;
        }
        return ptr;
      }
    }
    return nullptr;
  }

  ListNode *detectCycleByMap(ListNode *head) {
    std::unordered_set<ListNode*> visited;

    while (head != nullptr) {
      if (visited.count(head)) {
        return head;
      }
      visited.insert(head);
      head = head->next;
    }
    return nullptr;
  }
};
