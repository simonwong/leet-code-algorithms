import java.util.*;

// 46. 全排列
// https://leetcode-cn.com/problems/permutations/

/**
 * 通过 swap 原地交换
 */
class Solution {
  List<List<Integer>> res;
  public List<List<Integer>> permute(int[] nums) {
    this.res = new ArrayList<List<Integer>>();

    List<Integer> route = new ArrayList<Integer>();

    for (int num : nums) {
      route.add(num);
    }

    this.routeGenerate(route, 0);

    return this.res;
  }
  void routeGenerate(List<Integer> route, int swapTimes) {
    // 满足结束条件 (已经满足交换次数)
    if (route.size() == swapTimes) {
      this.res.add(new ArrayList<>(route));
      return;
    }
    // for 选择 in 选择列表
    for (int i = swapTimes; i < route.size(); i++) {
      // 做选择 (交换元素)
      Collections.swap(route, swapTimes, i);
      // 递归
      routeGenerate(route, swapTimes + 1);
      // 撤销选择 (撤回交换)
      Collections.swap(route, swapTimes, i);
    }
  }
}


/**
 * 通过判断 route.contains(current) 这个判断，更加耗时
 */
class SolutionOne {
  List<List<Integer>> res;
  public List<List<Integer>> permute(int[] nums) {
    List<Integer> route = new ArrayList<>();
    this.res = new ArrayList<List<Integer>>();

    this.routeGenerate(route, nums);

    return this.res;
  }
  void routeGenerate(List<Integer> route, int[] selects) {
    // 满足结束条件
    if (route.size() == selects.length) {
      this.res.add(new ArrayList<>(route));
      return;
    }
    // for 选择 in 选择列表
    for (int i = 0; i < selects.length; i++) {
      int current = selects[i];

      if (route.contains(current)) {
        continue;
      }
      // 做选择
      route.add(current);
      // 递归
      routeGenerate(route, selects);
      // 撤销选择
      route.remove(route.size() - 1);
    }
  }
}
