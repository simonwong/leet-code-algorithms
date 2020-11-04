import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

// 107. 二叉树的层次遍历 II
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
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
  List<List<Integer>> result;
  public List<List<Integer>> levelOrderBottom(TreeNode root) {
    this.result = new ArrayList<>();
    this.bfs(root, 0);
    Collections.reverse(result);
    return this.result;
  }

  void bfs (TreeNode root, int deep) {
    if (root == null) {
      return;
    }

    if (deep >= this.result.size()) {
      List<Integer> row = new ArrayList<>();
      row.add(root.val);
      this.result.add(row);
    } else {
      List<Integer> row = this.result.get(deep);
      row.add(root.val);
      this.result.set(deep, row);
    }
    bfs(root.left, deep + 1);
    bfs(root.right, deep + 1);
  }
}
