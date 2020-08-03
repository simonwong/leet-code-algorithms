
// 102. 二叉树的层序遍历
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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
  List<List<Integer>> result = new ArrayList<List<Integer>>();
  public List<List<Integer>> levelOrder(TreeNode root) {
    dfs(root, 0);
    return result;
  }
  void dfs(TreeNode root, int level) {
    if (root == null) {
      return;
    }
    List<Integer> cur = new ArrayList<Integer>();
    if (result.size() > level) {
      cur = result.get(level);
      cur.add(root.val);
    } else {
      cur.add(root.val);
      result.add(cur);
    }
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
}
