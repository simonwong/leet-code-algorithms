// 面试题 04.04. 检查平衡性
// https://leetcode-cn.com/problems/check-balance-lcci/
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
  public boolean flag = true;
  public boolean isBalanced(TreeNode root) {
    dfs(root);

    return flag;
  }

  public int dfs(TreeNode root) {
    if (root == null) {
      return 0;
    }
    int leftTreeHeight = dfs(root.left) + 1;
    int rightTreeHeight = dfs(root.right) + 1;

    if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
      flag = false;
    }
    return Math.max(leftTreeHeight, rightTreeHeight);
  }
}
