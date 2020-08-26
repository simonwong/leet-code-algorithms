// 114. 二叉树展开为链表
// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public void flatten(TreeNode root) {
    TreeNode cur = root;

    while (cur != null) {
      if (cur.left != null) {
        TreeNode next = cur.left;
        TreeNode predecessor = next;

        while (predecessor.right != null) {
          predecessor = predecessor.right;
        }

        predecessor.right = cur.right;
        cur.left = null;
        cur.right = next;
      }
      cur = cur.right;
    }
  }
}
