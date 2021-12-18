// 剑指 Offer 33. 二叉搜索树的后序遍历序列
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
function verifyPostorder(postorder: number[]): boolean {
  if (postorder.length <= 2) {
    return true
  }
  const n = postorder.length
  const checkPostorder = (l: number, r: number, last: number) => {
    if (l >= r) {
      return true
    }

    let nextR: number = r + 1
    let startCheck = false

    for (let i = l; i <= r; i++) {
      if (startCheck && postorder[i] < postorder[last]) {
        return false
      }
      if (!startCheck && postorder[i] > postorder[last]) {
        nextR = i
        startCheck = true
      }
    }
    return checkPostorder(l, nextR - 2, nextR - 1) && checkPostorder(nextR, r - 1, r)
  }

  return checkPostorder(0, n - 2, n - 1)
};

verifyPostorder([1,3,2,6,5])
