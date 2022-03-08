function cellsInRange(s: string): string[] {
  const [start, end] = s.split(':')
  const [si, sj] = start.split('')
  const [ei, ej] = end.split('')
  const ans: string[] = []
  for (let i = si.charCodeAt(0); i <= ei.charCodeAt(0); i++) {
    for (let j = Number(sj); j <= Number(ej); j++) {
      ans.push(`${String.fromCharCode(i)}${j}`)
    }
  }
  return ans
};
