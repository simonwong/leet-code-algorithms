// 剑指 Offer 37. 序列化二叉树
// https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const queue = []
  const strArr = []

  queue.push(root)
  while (queue.length > 0) {
    let len = queue.length

    while (len > 0) {
      let cur = queue.shift()
      strArr.push(cur?.val ?? null)
      if (cur) {
        queue.push(cur?.left ?? null)
        queue.push(cur?.right ?? null)
      }
      len--
    }
  }

  return strArr.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const strArr = data.split(',')
  const queue = []
  const root = strArr[0] ? new TreeNode(strArr[0]) : null
  if (root == null) {
    return root
  }

  queue.push(root)
  let i = 1

  while (queue.length > 0) {
    const cur = queue.shift()
    if (strArr[i] != '') {
      cur.left = new TreeNode(strArr[i])
      queue.push(cur.left)
    }
    i++
    if (strArr[i] != '') {
      cur.right = new TreeNode(strArr[i])
      queue.push(cur.right)
    }
    i++
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
