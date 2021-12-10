// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
// 剑指 Offer 52. 两个链表的第一个公共节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let curA = headA
  let curB = headB

  while (curA != curB) {
    curA = curA == null ? headB : curA.next
    curB = curB == null ? headA : curB.next
  }
  return curA
};
