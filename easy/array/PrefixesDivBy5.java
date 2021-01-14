import java.util.ArrayList;
import java.util.List;


// 数组可能会很长，每次只要取上一次的余数来加就可以
class Solution {
  public List<Boolean> prefixesDivBy5(int[] A) {
    int prev = 0;
    List<Boolean> res = new ArrayList<>();

    for (int i = 0; i < A.length; i++) {
      prev = ((prev << 1) + A[i]) % 5;
      res.add(prev == 0);
    }
    return res;
  }
}
