
//  class TreeNode {
//      val: number
//      left: TreeNode | null
//      right: TreeNode | null
//      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.left = (left===undefined ? null : left)
//          this.right = (right===undefined ? null : right)
//      }
//  }

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodeMap: Record<number, TreeNode> = {}
  const parentMap: Record<number, boolean> = {}

  for (let i = 0; i < descriptions.length; i++) {
    const [p, c, is] = descriptions[i];

    const parent = nodeMap[p] || (nodeMap[p] = new TreeNode(p))
    const child = nodeMap[c] || (nodeMap[c] = new TreeNode(c))

    parentMap[p] = parentMap[p] == null ? true : parentMap[p]
    parentMap[c] = false

    if (is === 1) {
      parent.left = child
    } else {
      parent.right = child
    }
  }
  let p = null

  Object.keys(parentMap).forEach(k => {
    if (parentMap[k]) {
      p = k
    }
  })

  return p ? nodeMap[p] : null
};
createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]])
