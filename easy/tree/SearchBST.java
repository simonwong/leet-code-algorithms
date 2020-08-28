// 700. 二叉搜索树中的搜索
// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
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
  public TreeNode searchBST(TreeNode root, int val) {
    while (root != null) {
      if (root.val == val) {
        return root;
      } else if (val < root.val) {
        root = root.left;
      } else if (val > root.val) {
        root = root.right;
      }
    }
    return null;
  }
}
