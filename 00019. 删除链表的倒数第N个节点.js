// 19. 删除链表的倒数第N个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

// 进阶：

// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function a(list) {
  //   let head = ListNode;
  list = list.reverse();
  return list.reduce((a, b) => {
    return new ListNode(b, a);
  }, null);
}

console.log(a([1, 2, 3, 4, 5, 6]));
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const list = [];
  let node = head;
  while (node) {
    list.push(node);
    node = node.next;
  }
  const len = list.length;
  const prevNode = list[len - n - 1];
  const nextNode = list[len - n + 1];

  list[len - n].next = null;

  if (prevNode) {
    prevNode.next = nextNode ? nextNode : null;
    return head;
  }

  return nextNode ? nextNode : null;
};
const b = a([1, 2, 3, 4, 5, 6]);
console.log(removeNthFromEnd(b, 6));
