// 面试题68 - I. 二叉搜索树的最近公共祖先
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
class SolutionlowestCommonAncestor {
  public TreeNode lowestCommonAncestor (TreeNode root, TreeNode p, TreeNode q) {
    while(root != null) {
      if (root.val > p.val && root.val > q.val) {
        root = root.left;
        continue;
      }
      if (root.val < p.val && root.val < q.val) {
        root = root.right;
        continue;
      }
      break;
    }
    return root;
  }

  // 递归写法
  // public TreeNode lowestCommonAncestor (TreeNode root, TreeNode p, TreeNode q) {
  //   if (root.val > p.val && root.val > q.val) {
  //     return lowestCommonAncestor(root.left, p, q);
  //   }
  //   if (root.val < p.val && root.val < q.val) {
  //     return lowestCommonAncestor(root.right, p, q);
  //   }
  //   return root;
  // }
}
