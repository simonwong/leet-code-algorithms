// 331. 验证二叉树的前序序列化
// https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/
function isValidSerialization(preorder: string): boolean {
  const preorderArr = preorder.split(',')
  const stack: number[] = []

  let i = 0
  stack.push(1)
  while (i < preorderArr.length) {
    const val = preorderArr[i]

    stack[stack.length - 1] -= 1
    if (stack[stack.length - 1] === 0) {
      stack.pop()
    }

    if (val !== '#') {
      stack.push(2)
    }
    i++
    if (stack.length === 0 && i < preorderArr.length) {
      return false
    }
  }
  return !stack.length
};
