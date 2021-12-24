// 剑指 Offer 20. 表示数值的字符串
// https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
function isNumber(s: string): boolean {
  enum State {
    STATE_INITIAL,
    STATE_INT_SIGN,
    STATE_INTEGER,
    STATE_POINT,
    STATE_POINT_WITHOUT_INT,
    STATE_FRACTION,
    STATE_EXP,
    STATE_EXP_SIGN,
    STATE_EXP_NUMBER,
    STATE_END
  }

  enum CharType {
    CHAR_NUMBER,
    CHAR_EXP,
    CHAR_POINT,
    CHAR_SIGN,
    CHAR_SPACE,
    CHAR_ILLEGAL
  }

  const toChartType = (t: string): CharType => {
    switch (t) {
      case 'e':
      case 'E':
        return CharType.CHAR_EXP
      case '.':
        return CharType.CHAR_POINT
      case '-':
      case '+':
        return CharType.CHAR_SIGN
      case ' ':
        return CharType.CHAR_SPACE
      default:
        break;
    }
    if (/\d/.test(t)) {
      return CharType.CHAR_NUMBER
    }
    return CharType.CHAR_ILLEGAL
  }

  const stateTransfer = {
    [State.STATE_INITIAL]: {
      [CharType.CHAR_SPACE]: State.STATE_INITIAL,
      [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
      [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
      [CharType.CHAR_SIGN]: State.STATE_INT_SIGN
    },
    [State.STATE_INT_SIGN]: {
      [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
      [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
    },
    [State.STATE_INTEGER]: {
      [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
      [CharType.CHAR_EXP]: State.STATE_EXP,
      [CharType.CHAR_POINT]: State.STATE_POINT,
      [CharType.CHAR_SPACE]: State.STATE_END,
    },
    [State.STATE_POINT]: {
      [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
      [CharType.CHAR_EXP]: State.STATE_EXP,
      [CharType.CHAR_SPACE]: State.STATE_END
    },
    [State.STATE_POINT_WITHOUT_INT]: {
      [CharType.CHAR_NUMBER]: State.STATE_FRACTION
    },
    [State.STATE_FRACTION]: {
      [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
      [CharType.CHAR_EXP]: State.STATE_EXP,
      [CharType.CHAR_SPACE]: State.STATE_END
    },
    [State.STATE_EXP]: {
      [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
      [CharType.CHAR_SIGN]: State.STATE_EXP_SIGN
    },
    [State.STATE_EXP_SIGN]: {
      [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER
    },
    [State.STATE_EXP_NUMBER]: {
      [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
      [CharType.CHAR_SPACE]: State.STATE_END
    },
    [State.STATE_END]: {
      [CharType.CHAR_SPACE]: State.STATE_END
    }
  }

  let st = State.STATE_INITIAL

  for (let i = 0; i < s.length; i++) {
    const charType = toChartType(s[i])

    if (stateTransfer[st][charType] === undefined) {
      return false
    }
    st = stateTransfer[st][charType]
  }

  const allowedEndState = [State.STATE_INTEGER, State.STATE_POINT, State.STATE_FRACTION, State.STATE_EXP_NUMBER, State.STATE_END]
  return allowedEndState.includes(st)
};


function isNumberByRegExp(s: string): boolean {
  return /^\s*[-+]?((\d+(\.\d+)?)|(\.\d+)|(\d+\.))([eE][-+]?\d+)?\s*$/.test(s)
};
