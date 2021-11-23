// 116. 填充每个节点的下一个右侧节点指针
// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/

export class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

function connect(root: Node | null): Node | null {
  if (root == null) {
    return null
  }

  let leftNode = root

  while (leftNode.left !== null) {
    let head: Node = leftNode

    while (head != null) {
      head.left.next = head.right

      if (head.next != null) {
        head.right.next = head.next.left
      }

      head = head.next
    }

    leftNode = leftNode.left
  }

  return root
};


// 层序遍历，利用了 queue
function connectByQueue(root: Node | null): Node | null {
  if (root == null) {
    return null
  }
  const queue: Node[] = []
  queue.push(root)

  while (queue.length > 0) {
    let len = queue.length
    let cur: Node

    while (len > 0) {
      if (!cur) {
        cur = queue.shift()
      } else {
        cur.next = queue.shift()
        cur = cur.next
      }
      if (cur && cur.left && cur.right) {
        queue.push(cur.left)
        queue.push(cur.right)
      }
      len--
    }
  }
  return root
};
