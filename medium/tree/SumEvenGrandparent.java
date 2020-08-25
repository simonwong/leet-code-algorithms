// 1315. 祖父节点值为偶数的节点和
// https://leetcode-cn.com/problems/sum-of-nodes-with-even-valued-grandparent/
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
  public int sumEvenGrandparent(TreeNode root) {
    this.sum = 0;

    dfs(root);

    return this.sum;
  }

  void dfs(TreeNode root) {
    if (root == null) {
      return;
    }
    if (root.val % 2 == 0) {
      sumTheChild(root, 0);
    }
    dfs(root.left);
    dfs(root.right);
  }

  void sumTheChild(TreeNode root, int deep) {
    if (deep > 2 || root == null) {
      return;
    }
    if (deep == 2) {
      this.sum += root.val;
    }
    sumTheChild(root.left, deep + 1);
    sumTheChild(root.right, deep + 1);
  }
}
