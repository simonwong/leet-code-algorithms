// 657. 机器人能否返回原点
// https://leetcode-cn.com/problems/robot-return-to-origin/
class Solution {
  public boolean judgeCircle(String moves) {
    int x = 0;
    int y = 0;

    for (String action : moves.split("")) {
      if (action.equals("R")) {
        x += 1;
      }
      if (action.equals("L")) {
        x -= 1;
      }
      if (action.equals("U")) {
        y += 1;
      }
      if (action.equals("D")) {
        y -= 1;
      }
    }
    if (x == 0 && y == 0) {
      return true;
    }
    return false;
  }
}
