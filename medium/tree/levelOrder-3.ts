// 剑指 Offer 32 - III. 从上到下打印二叉树 III
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
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
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }

  const cur = root
  const queue: TreeNode[] = []
  queue.push(cur)
  const ans: number[][] = []

  while (queue.length > 0) {
    const temp: number[] = []
    const tempArr: TreeNode[] = []
    const isReverse = ans.length % 2 === 1

    while (queue.length > 0) {
      tempArr.push(isReverse ? queue.pop() : queue.shift())
    }

    while (tempArr.length > 0) {
      const top = tempArr.shift()
      temp.push(top.val)
      if (isReverse) {
        if (top.right) {
          queue.unshift(top.right)
        }
        if (top.left) {
          queue.unshift(top.left)
        }
      } else {
        if (top.left) {
          queue.push(top.left)
        }
        if (top.right) {
          queue.push(top.right)
        }
      }
    }
    ans.push(temp)
  }

  return ans
};
