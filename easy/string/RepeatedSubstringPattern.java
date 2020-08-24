// 459. 重复的子字符串
// https://leetcode-cn.com/problems/repeated-substring-pattern/
class Solution {
  public boolean repeatedSubstringPattern(String s) {
    int repeatCount = 1;

    while (repeatCount < s.length()) {
      if (isRepeated(s, repeatCount)) {
        return true;
      };
      repeatCount += 1;
    }
    return false;
  }

  boolean isRepeated (String s, int count) {
    String rotateStr = s.substring(count) + s.substring(0, count);
    System.out.println(rotateStr);
    return s.equals(rotateStr);
  }
}
