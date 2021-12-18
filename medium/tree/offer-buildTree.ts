// 剑指 Offer 07. 重建二叉树
// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const n = preorder.length
  const temp = {}
  for (let i = 0; i < n; i++) {
    temp[inorder[i]] = i
  }

  const buildTreeInner = (preI: number, preJ: number, inI: number, inJ: number): TreeNode | null => {
    if (preI > preJ) {
      return null
    }
    const root = new TreeNode(preorder[preI])
    const inRootIndex = temp[preorder[preI]]
    const leftSize = inRootIndex - inI
    root.left = buildTreeInner(preI + 1, preI + leftSize, inI, inRootIndex - 1)
    root.right = buildTreeInner(preI + leftSize + 1, preJ, inRootIndex + 1, inJ)
    return root
  }

  return buildTreeInner(0, n - 1, 0, n - 1)
};

// 使用递归 + slice 实现
function buildTreeByRecursion(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null
  }

  if (preorder.length === 1) {
    return new TreeNode(preorder[0])
  }

  const val = preorder[0]
  const root = new TreeNode(val)
  const center = inorder.findIndex(v => v === val)

  root.left = buildTree(
    preorder.slice(1, center + 1),
    inorder.slice(0, center)
  )
  root.right = buildTree(
    preorder.slice(center + 1),
    inorder.slice(center + 1)
  )

  return root
};
