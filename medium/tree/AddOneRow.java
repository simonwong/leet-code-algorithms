// 623. 在二叉树中增加一行
// https://leetcode-cn.com/problems/add-one-row-to-tree/
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
  public TreeNode addOneRow(TreeNode root, int v, int d) {
    if (d == 1) {
      TreeNode newRoot = new TreeNode(v);
      newRoot.left = root;
      return newRoot;
    }
    bcfFind(root, v, d, 1);

    return root;
  }

  void bcfFind(TreeNode root, int v, int d, int deep) {
    if (root == null) {
      return;
    }

    if (d - 1 == deep) {
      TreeNode newRootL = new TreeNode(v);
      TreeNode newRootR = new TreeNode(v);
      newRootL.left = root.left;
      newRootR.right = root.right;

      root.left = newRootL;
      root.right = newRootR;

      return;
    }

    bcfFind(root.left, v, d, deep + 1);
    bcfFind(root.right, v, d, deep + 1);
  }
}
