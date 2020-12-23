// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

//

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// const h4 = new ListNode(4);
// const h1 = new ListNode(2, h4);
// const head = new ListNode(1, h1);

const head = null;
// const l4 = new ListNode(4);
// const l1 = new ListNode(3, l4);
const head1 = new ListNode(1);

console.log(head);
console.log(head1);

var mergeTwoLists = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let header = null;
  let current = null;

  while (node1 || node2) {
    let currentNode;
    if (!node1) {
      currentNode = node2;
      node2 = node2.next;
    } else if (!node2) {
      currentNode = node1;
      node1 = node1.next;
    } else if (node1.val > node2.val) {
      currentNode = node2;
      node2 = node2.next;
    } else if (node1.val <= node2.val) {
      currentNode = node1;
      node1 = node1.next;
    }

    if (!header) {
      header = currentNode;
    }

    if (!current) {
      current = currentNode;
    } else {
      current.next = currentNode;
      current = currentNode;
    }
  }

  return header;
};

console.log(mergeTwoLists(head, head1));
