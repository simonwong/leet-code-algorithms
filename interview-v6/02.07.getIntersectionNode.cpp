// 面试题 02.07. 链表相交
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
#include <stdlib.h>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
  ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    ListNode *NodeA = headA;
    ListNode *NodeB = headB;

    while (NodeA != NodeB) {
      NodeA = NodeA == nullptr ? headB : NodeA->next;
      NodeB = NodeB == nullptr ? headA : NodeB->next;
    }

    return NodeA;
  }
};
