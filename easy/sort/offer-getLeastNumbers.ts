// 剑指 Offer 40. 最小的k个数
// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr: number[], l: number, r: number): number => {
  const mid = l + ((r - l) >> 1)
  swap(arr, mid, r)
  let pivot = arr[r]
  let i = l
  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, r)
  return i
}

const quickSort = (arr: number[], l: number, r: number, k: number) => {
  if (l >= r) {
    return
  }
  const p = partition(arr, l, r)

  if (p > k) {
    quickSort(arr, l, p - 1, k)
  } else {
    quickSort(arr, p + 1, r, k)
  }
}

function getLeastNumbers(arr: number[], k: number): number[] {
  quickSort(arr, 0, arr.length - 1, k)
  return arr.slice(0, k)
};

// function getLeastNumbers(arr: number[], k: number): number[] {
//   const ans: number[] = []

//   for (let i = 0; i < arr.length; i++) {
//     const cur = arr[i]
//     let j = 0
//     for (; j < ans.length; j++) {
//       if (cur < ans[j]) {
//         break
//       }
//     }
//     if (ans.length < k) {
//       ans.splice(j, 0, cur)
//     } else if (j < k) {
//       ans.splice(j, 0, cur)
//       ans.pop()
//     }
//   }
//   return ans
// };
console.log(getLeastNumbers([0, 1, 2, 1], 1))
