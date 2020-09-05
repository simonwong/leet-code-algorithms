// 94. 二叉树的中序遍历
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

import java.util.Stack;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
  public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    Stack<TreeNode> stack = new Stack<>();

    TreeNode cur = root;
    while (cur != null && !stack.isEmpty()) {
      while (cur != null) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      res.add(cur.val);
      cur = cur.right;
    }

    return res;
  }
}
