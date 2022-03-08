/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
  const edgeTo = {}
  for (let i = 0; i < edges.length; i++) {
    const [form, to] = edges[i]
    edgeTo[to] = edgeTo[to] || []
    edgeTo[to].push(form)
  }
  const ans = new Array(n)

  const getParentDfs = (node, set, markedNode) => {
    if (markedNode[node]) {
      return
    }
    markedNode[node] = true
    if (edgeTo[node]) {
      for (let i = 0; i < edgeTo[node].length; i++) {
        set.add(edgeTo[node][i])
        getParentDfs(edgeTo[node][i], set, markedNode)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    const parents =  new Set()
    getParentDfs(i, parents, {})
    ans[i] = Array.from(parents).sort((a, b) => a - b)
  }
  return ans
};

getAncestors(8, [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]])
