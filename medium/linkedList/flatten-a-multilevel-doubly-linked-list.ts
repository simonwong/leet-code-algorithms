// 430. 扁平化多级双向链表
// https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/
export class Node {
  val: number;
  prev: Node | null;
  next: Node | null;
  child: Node | null;
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

function flatten(head: Node | null): Node | null {
  const getHeadAndTailNode = (node: Node | null) => {
    if (!node) {
      return {
        head: null,
        tail: null,
      }
    }
    let current: Node = node
    let tail: Node = null
    while (current) {
      if (current.next == null) {
        tail = current
      }

      if (current.child) {
        const childHeadAndTail = getHeadAndTailNode(current.child)
        current.child = null
        let next = current.next
        current.next = childHeadAndTail.head
        childHeadAndTail.head.prev = current
        if (next) {
          next.prev = childHeadAndTail.tail
          childHeadAndTail.tail.next = next
        }
      }

      current = current.next
    }

    return {
      head: node,
      tail: tail
    }
  }

  return getHeadAndTailNode(head).head
}
