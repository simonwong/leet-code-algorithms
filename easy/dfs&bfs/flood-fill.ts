// 733. 图像渲染
// https://leetcode-cn.com/problems/flood-fill/
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const replaceColor = image[sr][sc]

  const dfs = (img: number[][], x: number, y: number, nc: number, rc: number) => {
    if (x >= 0 && x < img.length && y >= 0 && y < img[0].length && img[x][y] === rc) {
      img[x][y] = nc

      dfs(img, x - 1, y, nc, rc)
      dfs(img, x + 1, y, nc, rc)
      dfs(img, x, y - 1, nc, rc)
      dfs(img, x, y + 1, nc, rc)
    }
  }
  if (newColor !== replaceColor) {
    dfs(image, sr, sc, newColor, replaceColor)
  }
  return image
};

// [
// [0,0,0],
// [0,1,1]
// ]
// 1,1,1


// [1,1,1]
// [1,1,0]
// [1,0,1]

// [2,2,2]
// [2,2,0]
// [2,0,1]
