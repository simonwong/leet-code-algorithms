// 剑指 Offer 45. 把数组排成最小的数
// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/

function swap (arr: string[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort (arr: string[], l: number, r: number) {
  if (l >= r) {
    return
  }
  let i = l
  let j = r

  while (i < j) {
    while (arr[j] + arr[l] >= arr[l] + arr[j] && i < j) {
      j--
    }
    while (arr[i] + arr[l] <= arr[l] + arr[i] && i < j) {
      i++
    }
    swap(arr, i, j)
  }

  swap(arr, i, l)

  quickSort(arr, l, i - 1)
  quickSort(arr, i + 1, r)
}

function minNumber(nums: number[]): string {
  const arr = nums.map(String)

  quickSort(arr, 0, arr.length - 1)

  return arr.join('')
};

// [3,30,34,5,9]
// "3033459"
