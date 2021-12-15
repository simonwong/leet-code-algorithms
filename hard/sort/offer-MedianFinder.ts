// 剑指 Offer 41. 数据流中的中位数
// https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/

class PriorityQueue<T> {
  private data: T[]
  private currentSize: number

  private compare: (a: any, b: any) => number  = (a, b) =>{
    return a - b
  }

  constructor (compare?: (a: any, b: any) => number) {
    this.data = new Array<T>()
    this.currentSize = 0

    if (compare) {
      this.compare = compare
    }

    this.data.push(undefined)
  }

  /**
   * 推入数据
   */
  public push (val: T) {
    this.data.push(val)
    // 上滤
    let hole = ++this.currentSize

    while (this.compare(val, this.data[hole >> 1]) < 0) {
      this.data[hole] = this.data[hole >> 1]
      hole >>= 1
    }
    this.data[hole] = val
  }

  /**
   * 推出堆顶数据
   */
  public pop () {
    if (this.empty()) {
      throw RangeError('Underflow Exception')
    }
    const top = this.top()
    const latest = this.data.pop()
    this.currentSize--
    if (this.currentSize > 0) {
      this.data[1] = latest
      this.percolateDown(1)
    }
    return top
  }

  /**
   * 返回堆顶数据
   */
  public top () {
    return this.data[1]
  }

  /**
   * 返回当前堆大小
   */
  public size() {
    return this.data.length -  1
  }

  /**
   * 判断是否为空
   */
  public empty() {
    return this.data.length <= 1
  }

  /**
   * 下滤
   */
  private percolateDown (hole: number) {
    let child = 0
    const temp = this.data[hole]

    while (hole * 2 <= this.currentSize) {
      child = hole * 2

      // 左右节点对比，如果右节点小，child+1
      if (child !== this.currentSize && this.compare(this.data[child + 1], this.data[child]) < 0) {
        child++
      }
      // 父子节点比较，交换
      if (this.compare(this.data[child], temp) < 0) {
        this.data[hole] = this.data[child]
      } else {
        break
      }
      hole = child
    }

    this.data[hole] = temp
  }
}

class MedianFinder {
  minHeap: PriorityQueue<number>
  maxHeap: PriorityQueue<number>

  constructor() {
    this.minHeap = new PriorityQueue()
    this.maxHeap = new PriorityQueue((a, b) => b - a)
  }

  addNum(num: number): void {
    if (this.maxHeap.size() !== this.minHeap.size()) {
      this.minHeap.push(num)
      this.maxHeap.push(this.minHeap.pop())
    } else {
      this.maxHeap.push(num)
      this.minHeap.push(this.maxHeap.pop())
    }
  }

  findMedian(): number {
    return this.minHeap.size() !== this.maxHeap.size() ? this.minHeap.top() : (this.minHeap.top() + this.maxHeap.top()) / 2
  }
}

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/
class MedianFinderByDynamicSplice {
  arr: number[]

  constructor() {
    this.arr = []
  }

  addNum(num: number): void {
    let i = 0
    for (; i < this.arr.length; i++) {
      if (num < this.arr[i]) {
        break
      }
    }
    this.arr.splice(i, 0, num)
  }

  findMedian(): number {
    const len = this.arr.length
    const mid = len >> 1

    if (len % 2 === 0) {
      return (this.arr[mid] + this.arr[mid-1]) / 2
    }
    return this.arr[mid]
  }
}
