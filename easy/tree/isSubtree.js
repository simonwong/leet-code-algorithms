// 572. 另一个树的子树
// https://leetcode-cn.com/problems/subtree-of-another-tree/
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let flag = false
  loopTree(s, (sNode) => {
    const isSame = isSameTree(sNode, t)
    if (isSame === true) {
      flag = true
    }
    return isSame
  })
  return flag
};

var loopTree = function (t, cb) {
  const isEnd = cb(t)
  if (isEnd === true) {
    return
  }
  if (t) {
    loopTree(t.left, cb)
    loopTree(t.right, cb)
  }
}

var isSameTree = function (s, t) {
  if (s && t && s.val === t.val) {
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
  } else if (s === null && t === null) {
    return true
  }
  return false
}

const sTree = new TreeNode(3)
sTree.left = new TreeNode(4)
sTree.right = new TreeNode(5)
sTree.left.left = new TreeNode(1)
sTree.left.right = new TreeNode(2)


const tTree = new TreeNode(4)
tTree.left = new TreeNode(1)
tTree.right = new TreeNode(2)

console.log(isSubtree(sTree, tTree))
