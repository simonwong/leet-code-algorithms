// 515. 在每个树行中找最大值
// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  List<Integer> maxArray;
  public List<Integer> largestValues(TreeNode root) {
    this.maxArray = new ArrayList();
    this.bfs(root, 0);

    return this.maxArray;
  }

  void bfs(TreeNode root, int deep) {
    if (root == null) {
      return;
    }

    if (deep < maxArray.size()) {
      maxArray.set(deep, Math.max(maxArray.get(deep), root.val));
    } else {
      maxArray.add(root.val);
    }

    bfs(root.left, deep + 1);
    bfs(root.right, deep + 1);
  }
}
