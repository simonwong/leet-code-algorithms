// 671. 二叉树中第二小的节点
// https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
class Solution {
public:
  int findSecondMinimumValue(TreeNode* root) {
    int ans = -1;
    int min = root->val;

    function<void(TreeNode*)> dfs = [&](TreeNode *node) {
      if (!node) {
        return;
      }
      if (ans != -1 && node->val >= ans) {
        return;
      }
      if (node->val > min) {
        ans = node->val;
      }
      dfs(node->left);
      dfs(node->right);
    };
    dfs(root);
    return ans;
  }
};
