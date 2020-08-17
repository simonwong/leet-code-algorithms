// 110. 平衡二叉树
// https://leetcode-cn.com/problems/balanced-binary-tree/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class SolutionisBalanced {
  boolean flag;
  public boolean isBalanced(TreeNode root) {
    this.flag = true;
    dfs(root);

    return this.flag;
  }

  public int dfs(TreeNode root) {
    if (root == null) {
      return 0;
    }
    int leftTreeHeight = dfs(root.left) + 1;
    int rightTreeHeight = dfs(root.right) + 1;

    if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
      this.flag = false;
    }
    return Math.max(leftTreeHeight, rightTreeHeight);
  }
}
