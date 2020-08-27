// 979. 在二叉树中分配硬币
// https://leetcode-cn.com/problems/distribute-coins-in-binary-tree/
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
  int times;
  public int distributeCoins(TreeNode root) {
    times = 0;

    dfs(root);

    return times;
  }

  int dfs (TreeNode root) {
    if (root == null) {
      return 0;
    }

    int leftTimes = dfs(root.left);
    int rightTimes = dfs(root.right);

    times += Math.abs(leftTimes) + Math.abs(rightTimes);

    return root.val + leftTimes + rightTimes - 1;
  }
}
