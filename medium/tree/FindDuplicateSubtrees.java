// 652. 寻找重复的子树
// https://leetcode-cn.com/problems/find-duplicate-subtrees/
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
  Map<String, Integer> count;
  List<TreeNode> ans;
  public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
    count = new HashMap();
    ans = new ArrayList();
    collect(root);

    return ans;
  }

  String collect(TreeNode root) {
    if (root == null) {
      return "#";
    }
    String serial = root.val + "," + collect(root.left) + "," + collect(root.right);

    count.put(serial, count.getOrDefault(serial, 0) + 1);

    if (count.get(serial) == 2) {
      ans.add(root);
    }
    return serial;
  }
}
