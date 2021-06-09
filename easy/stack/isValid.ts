function isGroup (pre, next) {
  switch (pre) {
    case '(':
      return next === ')';
    case '{':
      return next === '}';
    case '[':
      return next === ']';
  }
}

function isValid(s: string): boolean {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (arr.length === 0) {
      arr.push(s[i])
    } else {
      const top = arr[arr.length - 1]
      if (isGroup(top, s[i])) {
        arr.pop()
      } else {
        arr.push(s[i])
      }
    }
  }
  return arr.length === 0
};
