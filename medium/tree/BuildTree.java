import java.util.HashMap;

// 105. 从前序与中序遍历序列构造二叉树
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
  Map<Integer, Integer> inorderMap;
  public TreeNode buildTree(int[] preorder, int[] inorder) {
    this.inorderMap = new HashMap();

    for (int i = 0; i < inorder.length; i++) {
      this.inorderMap.put(inorder[i], i);
    }
    return this.autoBuild(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
  }

  TreeNode autoBuild (int[] preorder, int[] inorder, int preI, int preJ, int inI, int inJ) {
    if (preI > preJ) {
      return null;
    }

    int preRoot = preI;
    int inRoot = this.inorderMap.get(preorder[preRoot]);

    TreeNode root = new TreeNode(preorder[preRoot]);

    int leftSubTreeSize = inRoot - inI;

    root.left = this.autoBuild(preorder, inorder, preI + 1, preI + leftSubTreeSize, inI, inRoot - 1);
    root.right = this.autoBuild(preorder, inorder, preI + leftSubTreeSize + 1, preJ, inRoot + 1, inJ);

    return root;
  }
}
