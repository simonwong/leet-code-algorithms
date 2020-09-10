// 剑指 Offer 54. 二叉搜索树的第k大节点
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
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
  int result;
  public int kthLargest(TreeNode root, int k) {
    times = 0;
    dfc(root, k);

    return result;
  }

  void dfc(TreeNode root, int k) {
    if (root == null) {
      return;
    }
    dfc(root.right, k);

    times += 1;
    if (times == k) {
      result = root.val;
      return;
    }

    dfc(root.left, k);
  }
}
