// 剑指 Offer 52. 两个链表的第一个公共节点
// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
// 160. 相交链表
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

#include <iostream>

using namespace std;

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

// 两个链表长度分别为 L1 + c 、L2 + c
// 第一个人走完了 L1 + c，就到 L2 的起点开始走
// 第二个人走完了 L2 + c，就到 L1 的起点开始走
// （上面总有一个人先走完自己的路）当两人走的总步长为 L1 + L2 + c，便相遇
// 也可能走完 L1 + L2 + c + c，便完美错过
class Solution {
public:
  ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    if (headA == NULL || headB == NULL) {
      return NULL;
    }

    ListNode *curA = headA;
    ListNode *curB = headB;

    while (curA != curB) {
      curA = curA != NULL ? curA->next : headB;
      curB = curB != NULL ? curB->next : headA;
    }

    return curA;
  }
};
