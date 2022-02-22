// 146. LRU 缓存
// https://leetcode-cn.com/problems/lru-cache/

class LinkNode<T> {
  val: T
  next: LinkNode<T> | null
  prev: LinkNode<T> | null

  constructor (val: T) {
    this.val = val
  }
}

class DoubleLinkedList<T> {
  head: LinkNode<T> | null
  size: number

  constructor () {
    this.head = null
    this.size = 0
  }

  push(val: T) {
    const newNode = new LinkNode(val)
    if (this.head === null) {
      newNode.next = newNode
      newNode.prev = newNode
      this.head = newNode
    } else {
      const latest = this.head.prev
      latest.next = newNode
      newNode.prev = latest
      newNode.next = this.head
      this.head.prev = newNode
    }
    this.size++
  }

  removeHead () {
    if (this.size === 0) {
      return -1
    }
    const val = this.head.val
    if (this.size === 1) {
      this.head = null
      this.size--
      return val
    }

    const next = this.head.next
    const latest = this.head.prev

    next.prev = latest
    this.head.prev = null
    latest.next = next
    this.head.next = null
    this.head = next
    this.size--
    return val
  }

  moveToTail (key: T) {
    let cur = this.head
    let count = this.size
    while (count > 0 && cur.val !== key) {
      cur = cur.next
      count--
    }
    const prev = cur.prev
    const next = cur.next
    prev.next = next
    next.prev = prev
    if (cur === this.head) {
      this.head = next
    }

    const tail = this.head.prev
    tail.next = cur
    cur.next = this.head
    cur.prev = tail
    this.head.prev = cur
  }

  toString () {
    let cur = this.head
    let str = ''
    let count = this.size
    while (count > 0) {
      str += cur.val
      cur = cur.next
      count--
    }
    return str
  }
}

class LRUCache {
  linkedList: DoubleLinkedList<number>
  obj: Record<number, number>
  limit: number
  count: number

  constructor(capacity: number) {
    this.linkedList = new DoubleLinkedList()
    this.obj = {}
    this.limit = capacity
    this.count = 0
  }

  get(key: number): number {
    if (this.obj[key] != null) {
      this.linkedList.moveToTail(key)
      return this.obj[key]
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.obj[key] != null) {
      this.obj[key] = value
      this.linkedList.moveToTail(key)
      return
    }

    if (this.count === this.limit) {
      const overdueKey = this.linkedList.removeHead()
      this.obj[overdueKey] = null
      this.linkedList.push(key)
      this.obj[key] = value
    } else {
      this.linkedList.push(key)
      this.obj[key] = value
      this.count++
    }
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
