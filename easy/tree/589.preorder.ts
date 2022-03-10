// 589. N 叉树的前序遍历
// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

 function preorder(root: Node | null): number[] {
  const ans: number[] = []

  const dfs = (node: Node | null) => {
    if (node == null) {
      return
    }
    ans.push(node.val)
    for (let child of node.children) {
      dfs(child)
    }
  }

  dfs(root)

  return ans
};
