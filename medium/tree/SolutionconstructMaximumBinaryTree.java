// 654. 最大二叉树
// https://leetcode-cn.com/problems/maximum-binary-tree/
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
  public TreeNode constructMaximumBinaryTree(int[] nums) {
    int i = 0;
    int j = nums.length - 1;
    TreeNode root = buildTree(new TreeNode(), nums, i, j);
    return root;
  }

  /**
   * 查找 i-j 的最大值
   * @param nums
   * @param i
   * @param j
   * @return
   */
  int findMaximumIndex (int[] nums, int i, int j) {
    if (i > j) {
      return -1;
    }
    int maxNum = nums[i];
    int maxIndex = i;
    for (; i < nums.length && i <= j; i++) {
      int curNum = Math.max(maxNum, nums[i]);
      if (curNum != maxNum) {
        maxNum = curNum;
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  /**
   *递归构建树
   * @param root
   * @param nums
   * @param i
   * @param j
   * @return
   */
  TreeNode buildTree (TreeNode root, int[]nums, int i, int j) {
    int maxIndex = this.findMaximumIndex(nums, i, j);
    if (maxIndex >= 0) {
      root.val = nums[maxIndex];
      root.left = buildTree(new TreeNode(), nums, i, maxIndex - 1);
      root.right = buildTree(new TreeNode(), nums, maxIndex + 1, j);

      return root;
    }
    return null;
  }
}
