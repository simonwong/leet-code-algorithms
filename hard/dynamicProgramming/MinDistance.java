// 72. 编辑距离
// https://leetcode-cn.com/problems/edit-distance/


// 原理案例
// 从最后一位开始对比
// horse -> ros
// 1. hors(e) -> ro(s) 不等，插入 + 1
// horse -> rose
// 2. hor(s)e -> ro(s)e 相等，跳过
// horse -> rose
// 3. ho(r)se -> r(o)se 不等，插入 + 1
// horse -> rorse
// 4. h(o)rse -> r(o)rse 相等，跳过
// horse -> rorse
// 5. (h)orse -> (r)orse 不等，插入 + 1
// horse -> rhorse
// 6. ()horse -> (r)horse 没了，删除 + 1
// horse -> horse


class Solution {
  public int minDistance(String word1, String word2) {
    int i = word1.length();
    int j = word2.length();
    int[][] dp = new int[i+1][j+1];

    // base case
    for (int m = 1; m <= i; m++) {
      dp[m][0] = m;
    }
    for (int n = 1; n <= j; n++) {
      dp[0][n] = n;
    }

    for (int m = 1; m <= i; m++) {
      for (int n = 1; n <= j; n++) {
        if (word1.charAt(m - 1) == word2.charAt(n - 1)) {
          // skip
          dp[m][n] = dp[m - 1][n - 1];
        } else {
          dp[m][n] = Math.min(
            Math.min(
              dp[m - 1][n], // 插入
              dp[m][n - 1] // 删除
            ),
            dp[m - 1][n - 1] // 替换
          ) + 1;
        }
      }
    }
    return dp[i][j];
  }
}

// 暴力解法，自上而下
class ForceSolution {
  String prevWord;
  String nextWord;
  public int minDistance(String word1, String word2) {
    this.prevWord = word1;
    this.nextWord = word2;
    int i = this.prevWord.length();
    int j = this.nextWord.length();

    return this.getMinTimes(i - 1, j - 1);
  }

  int getMinTimes (int i, int j) {
    // base case
    if (i == -1) {
      return j + 1;
    }
    if (j == -1) {
      return i + 1;
    }
    if (this.prevWord.charAt(i) == this.nextWord.charAt(j)) {
      // skip
      return getMinTimes(i - 1, j - 1);
    } else {
      return Math.min(
        Math.min(
          getMinTimes(i - 1, j), // 插入
          getMinTimes(i, j - 1) // 删除
        ),
        getMinTimes(i - 1, j - 1) // 替换
      ) + 1;
    }
  }
}
