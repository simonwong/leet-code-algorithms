// 832. 翻转图像
// https://leetcode-cn.com/problems/flipping-an-image/
// 知识点， 0 1 反转，可以 1 - x 或者异或运算符 x ^ 1
class Solution {
  public int[][] flipAndInvertImage(int[][] A) {
    for (int i = 0; i < A.length; i++) {
      int[] curLine = A[i];

      int left = 0;
      int right = curLine.length - 1;

      while (left < right) {
        int temp = curLine[left];
        curLine[left] = curLine[right] ^ 1;
        curLine[right] = temp ^ 1;

        left++;
        right--;
      }
      if (left == right) {
        curLine[left] = curLine[left] ^ 1;
      }
    }

    return A;
  }
}
