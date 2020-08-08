// 99. 恢复二叉搜索树
// https://leetcode-cn.com/problems/recover-binary-search-tree/
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
  TreeNode pre = null;
  TreeNode t1 = null;
  TreeNode t2 = null;
  public void recoverTree(TreeNode root) {
    inOrder(root);
    TreeNode temp = t1;
    t1.val = t2.val;
    t2.val = temp.val;
  }

  void inOrder (TreeNode root) {
    if (root == null) {
      return;
    }
    inOrder(root.left);
    if (pre != null && t1 == null && t2 == null &&  pre.val > root.val) {
      t1 = pre;
      t2 = root;
    } else if (t1 != null && t2 != null && root.val < t2.val) {
      t2 = root;
    }
    pre = root;
    inOrder(root.right);
  }
}
