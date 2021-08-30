// 1314. 矩阵区域和
// https://leetcode-cn.com/problems/matrix-block-sum/

// 二维前缀和
// pre[i][j] = pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1] + a[i][j]

// 求(x1, y1) - (x2, y2)  子矩阵的和
// = pre[x2][y2] - pre[x1-1][y2] - pre[x2][y1-1] + pre[x1-1][y1-1]

function matrixBlockSum(mat: number[][], k: number): number[][] {
  const n = mat.length
  const m = mat[0].length
  const ans: number[][] = new Array(n)
  const pre: number[][] = new Array(n + 1).fill([]).map(() => new Array(m+1).fill(0))

  for (let i = 1; i <= n; i++) {
    pre[i][0] = 0
    for (let j = 1; j <= m; j++) {
      pre[i][j] = pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1] + mat[i-1][j-1]
    }
  }
  for (let i = 0; i < n; i++) {
    ans[i] = new Array(m)
    for (let j = 0; j < m; j++) {
      const minI = i - k > 0 ? i - k : 0;
      const minJ = j - k > 0 ? j - k : 0;
      const maxI = i + k < n - 1 ? i + k : n - 1;
      const maxJ = j + k < m - 1 ? j + k : m - 1;
      ans[i][j] = pre[maxI + 1][maxJ + 1] - pre[minI][maxJ + 1] - pre[maxI + 1][minJ] + pre[minI][minJ]
    }
  }
  return ans
};

matrixBlockSum([[67,64,78],[99,98,38],[82,46,46],[6,52,55],[55,99,45]], 3)
