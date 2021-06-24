/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// https://leetcode-cn.com/problems/add-two-numbers/
// 2. 两数相加
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const ans = new ListNode(-1)
  recursion(ans, l1, l2, 0)
  return ans.next
};

function recursion (result: ListNode | null, l1: ListNode | null, l2: ListNode | null, carry: number) {
  if (l1 || l2 || carry) {
    const curVal = (l1?.val || 0) + (l2?.val || 0) + carry
    const num = curVal % 10
    const nextCarry = curVal >= 10 ? 1 : 0
    result.next = new ListNode(num)

    recursion(result.next, l1?.next, l2?.next, nextCarry)
  }
}
