// 919. 完全二叉树插入器
// https://leetcode-cn.com/problems/complete-binary-tree-inserter/

import java.util.*;
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class CBTInserter {
  TreeNode root;
  Deque<TreeNode> deque;

  public CBTInserter(TreeNode root) {
    this.root = root;
    this.deque = new LinkedList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
      TreeNode head = queue.poll();
      if (head.left == null || head.right == null) {
        this.deque.offerLast(head);
      }
      if (head.left != null) {
        queue.offer(head.left);
      }
      if (head.right != null) {
        queue.offer(head.right);
      }
    }
  }

  public int insert(int v) {
    TreeNode head = this.deque.peekFirst();
    TreeNode newNode = new TreeNode(v);
    this.deque.offerLast(newNode);

    if (head.left == null) {
      head.left = newNode;
    } else if (head.right == null) {
      head.right = newNode;
      this.deque.pollFirst();
    }
    return head.val;
  }

  public TreeNode get_root() {
    return this.root;
  }
}

/**
* Your CBTInserter object will be instantiated and called as such:
* CBTInserter obj = new CBTInserter(root);
* int param_1 = obj.insert(v);
* TreeNode param_2 = obj.get_root();
*/
