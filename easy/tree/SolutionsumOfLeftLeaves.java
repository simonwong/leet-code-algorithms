// 404. 左叶子之和
// https://leetcode-cn.com/problems/sum-of-left-leaves/
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
  int sum;
  public int sumOfLeftLeaves(TreeNode root) {
    sum = 0;
    dfs(root);
    return sum;
  }

  void dfs (TreeNode root) {
    if (root == null) {
      return;
    }
    if (root.left != null && root.left.left == null && root.left.right == null) {
      sum += root.left.val;
    }
    dfs(root.left);
    dfs(root.right);
  }
}
