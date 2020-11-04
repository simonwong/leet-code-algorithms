import java.util.ArrayList;
import java.util.List;

// 46. 全排列
// https://leetcode-cn.com/problems/permutations/
class Solution {
  public List<List<Integer>> permute(int[] nums) {
    List<Integer> route = new ArrayList<>();
    List<List<Integer>> res = new ArrayList<>();

    List<Integer> selects = Arrays.stream(nums).boxed().collect(Collectors.toList());

    this.routeGenerate(route, selects, res);

    return res;
  }
  public void routeGenerate(List<Integer> route, List<Integer> selects, List<List<Integer>> res) {
    if (selects.size() == 0) {
      res.add(route);
      return;
    }
    for (int i = 0; i < selects.size(); i++) {
      List<Integer> nextRoute = new ArrayList<>(route);
      List<Integer> nextSelects = new ArrayList<>(selects);

      nextRoute.add(nextSelects.get(i));
      nextSelects.remove(i);

      routeGenerate(nextRoute, nextSelects, res);
    }
  }
}

