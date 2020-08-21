// 111. 二叉树的最小深度
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
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
  int minHeight;
  public int minDepth(TreeNode root) {
    if (root == null) {
      minHeight = 0;
    }
    dfsCalculateLength(root, 1);

    return minHeight;
  }

  void dfsCalculateLength (TreeNode root, int height) {
    if (root == null) {
      return;
    }
    if (root.left == null && root.right == null) {
      if (this.minHeight == 0) {
        this.minHeight = height;
      } else {
        this.minHeight = Math.min(this.minHeight, height);
      }
      return;
    }

    dfsCalculateLength(root.left, height + 1);
    dfsCalculateLength(root.right, height + 1);
  }
}
