// 867. 转置矩阵
// https://leetcode-cn.com/problems/transpose-matrix/

class Solution {
  public int[][] transpose(int[][] matrix) {
    int y = matrix.length;
    int x = matrix[0].length;
    int[][] res = new int[x][y];

    for (int j = 0; j < y; j++) {
      for (int i = 0; i < x; i++) {
        res[i][j] = matrix[j][i];
      }
    }
    return res;
  }
}
