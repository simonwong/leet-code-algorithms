// 1206. 设计跳表
// https://leetcode-cn.com/problems/design-skiplist/

class SkipListNode {
  val: number
  level: SkipListNode[]

  constructor (val: number, level: number = 32) {
    this.val = val
    this.level = Array(32).fill(null)
  }
}

class SkipList {
  head: SkipListNode
  tail: SkipListNode
  level: number
  length: number

  private MAX_LEVEL = 32
  private DEFAULT_P_FACTOR = 0.25

  constructor () {
    this.level = 0
    this.length = 0
    this.tail = new SkipListNode(Number.MAX_SAFE_INTEGER, 0)
    this.head = new SkipListNode(Number.MAX_SAFE_INTEGER)

    for (let i = 0; i < 32; i++) {
      this.head.level[i] = this.tail
    }
  }

  find (val: number): SkipListNode {
    let current = this.head
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.level[i] && current.level[i].val < val) {
        current = current.level[i]
      }
    }
    current = current.level[0]
    return current
  }

  randomLevel(): number {
    let lv = 1;
    while (lv < this.MAX_LEVEL && Math.random() < this.DEFAULT_P_FACTOR) ++lv;
    return lv;
  }

  search (val: number): boolean {
    const node = this.find(val)
    return node.val === val
  }

  add (val: number) {
    const update: SkipListNode[] = Array(this.MAX_LEVEL)
    let current = this.head
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.level[i] && current.level[i].val < val) {
        current = current.level[i]
      }
      update[i] = current
    }
    let lv = this.randomLevel()
    if (lv > this.level) {
      lv = ++this.level
      update[lv - 1] = this.head
    }
    const newNode = new SkipListNode(val, lv)
    for (let i = lv - 1; i >= 0; i--) {
      current = update[i]
      newNode.level[i] = current.level[i]
      current.level[i] = newNode
    }
    this.length++
  }

  erase (val: number): boolean {
    const update = Array(this.MAX_LEVEL + 1)
    let current = this.head
    for (let i = this.level-1; i >= 0; i--) {
      while (current.level[i] && current.level[i].val < val) {
        current = current.level[i]
      }
      update[i] = current
    }
    current = current.level[0]
    if (current.val !== val) {
      return false
    }

    for (let i = 0; i < this.level; i++) {
      if (update[i].level[i] !== current) {
        break
      }
      update[i].level[i] = current.level[i]
    }
    while (this.level > 0 && this.head.level[this.level - 1] === this.tail) {
      this.level--
    }
    this.length--
    return true
  }
}

const aa = new SkipList()
console.log(aa.add(1))
// console.log(aa.add(2))
// console.log(aa.add(3))
console.log(aa.search(1))
