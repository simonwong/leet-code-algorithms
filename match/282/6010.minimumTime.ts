function minimumTime(time: number[], totalTrips: number): number {
  let l = 0
  let r = Math.min(...time) * totalTrips
  while (l < r) {
    const mid = Math.floor((l + r)  / 2)
    let tot = 0
    for (let t of time) {
      tot += Math.floor(mid / t)
    }
    if (tot >= totalTrips) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
};
