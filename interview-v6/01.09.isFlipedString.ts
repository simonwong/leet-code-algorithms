function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false
  }
  const target = s2 + s2
  return target.includes(s1)
};
console.log(isFlipedString('waterbottle', 'erbottlewat'))
