/**
 * 两数相加
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = new LinkedList()
    let number_1, current_1 = l1
    let number_2, current_2 = l2
    // 进位
    let carray = 0

    while (current_1 || current_2 || carray) {
        const val_1 = current_1 ? current_1.val : 0
        const val_2 = current_2 ? current_2.val : 0
        let resVal = val_1 + val_2 + carray
        
        if (resVal >= 10) {
            carray = 1
            resVal = resVal % 10
        } else [
            carray = 0
        ]
        result.append(resVal)
        current_1 = current_1 ? current_1.next : null
        current_2 = current_2 ? current_2.next : null
    }
    console.log(result.get())
    return result.get()
};

/**
 * 链表的实现
 */
function LinkedList () {
    const ListNode = function (value) {
        this.val = value
        this.next = null
    }
    let length = 0
    let head = null

    this.append = value => {
        const node = new ListNode(value)
        let current

        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }

    this.get = () => head
}

function generateListNode (number) {
    const numReverseArray = number.toString().split('').reverse()
    const linkedList = new LinkedList()

    numReverseArray.forEach(num => {
        linkedList.append(Number(num))
    })

    return linkedList.get()
}

const l1 = generateListNode(5)
const l2 = generateListNode(5)

addTwoNumbers(l1, l2)

// 342
// 1465
// => 1807

// [2, 4, 3]
// [5, 6, 4, 1]