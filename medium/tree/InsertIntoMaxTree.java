// 998. 最大二叉树 II
// https://leetcode-cn.com/problems/maximum-binary-tree-ii/
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
/**
 * 新插入的值在数组的最后，根据生成最大树的规则，可以得出，
 * 新插入的节点要么是根结点，要么都在树右侧，所以递归右树
 * 当 val > 比较的节点，只要把旧节点放到新节点左侧就可以了
 */
class Solution {
  public TreeNode insertIntoMaxTree(TreeNode root, int val) {
    if (val > root.val) {
      TreeNode newRoot = new TreeNode(val);
      newRoot.left = root;
      return newRoot;
    }
    postSort(root, val);
    return root;
  }

  void postSort (TreeNode root, int val) {
    if (root.right == null) {
      root.right = new TreeNode(val);
      return;
    }
    if (val > root.right.val) {
      TreeNode tempNode = root.right;
      root.right = new TreeNode(val);
      root.right.left = tempNode;
      return;
    }
    postSort(root.right, val);
  }
}
