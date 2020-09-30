// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 215. 数组中的第K个最大元素
class Solution {
  Random random = new Random();
  public int findKthLargest(int[] nums, int k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
  }

  int quickSelect(int[] a, int l, int r, int index) {
    int q = this.randomPartition(a, l, r);

    if (q == index) {
      return a[q];
    } else {
      return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);
    }
  }

  int randomPartition(int[] a, int l, int r) {
    int i = this.random.nextInt(r - l + 1) + l;
    swap(a, i, r);
    return partition(a, l, r);
  }

  int partition (int[] a, int l, int r) {
    int x = a[r];
    int i = l - 1;

    for (int j = l; j < r; j++) {
      if (a[j] <= x) {
        swap(a, ++i, j);
      }
    }
    swap(a, i + 1, r);
    return i + 1;
  }

  void swap (int[] a, int i, int j) {
    int temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}

// ==================================================

// 桶排序无法处理负数。。。
// var findKthLargest = function(nums, k) {
//   let bucket = []
//   for (let i = 0; i < nums.length; i++) {
//     bucket[nums[i]] = bucket[nums[i]] ? bucket[nums[i]] + 1 : 1
//   }

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i]) {
//       k -= bucket[i]
//     }
//     if (k <= 0) {
//       return i
//     }
//   }
// };
