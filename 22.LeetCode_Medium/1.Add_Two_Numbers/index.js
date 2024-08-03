// Task-1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let carry = 0,
    p = l1,
    q = l2;
  let current = dummyHead;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

// Helper function to print a linked list
function printLinkedList(node) {
  let output = [];
  while (node !== null) {
    output.push(node.val);
    node = node.next;
  }
  console.log(output.join(" -> "));
}

// Test Cases
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sum = addTwoNumbers(l1, l2);
printLinkedList(sum); // Output: 7 -> 0 -> 8

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum); // Output: 0

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
