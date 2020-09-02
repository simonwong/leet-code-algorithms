// 897. 递增顺序查找树
// https://leetcode-cn.com/problems/increasing-order-search-tree/

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
  TreeNode newRoot;
  public TreeNode increasingBST(TreeNode root) {
    return inorderTranversal(root, null);
  }

  TreeNode inorderTranversal(TreeNode root, TreeNode tail) {
    if (root == null) {
      return tail;
    }

    TreeNode res = this.inorderTranversal(root.left, root);
    root.left = null;
    root.right = inorderTranversal(root.right, tail);
    return res;
  }
}
