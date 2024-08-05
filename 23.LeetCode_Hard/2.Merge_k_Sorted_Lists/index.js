// Task-2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val <= this.heap[index].val) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].val < this.heap[smallestIndex].val
    ) {
      smallestIndex = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].val < this.heap[smallestIndex].val
    ) {
      smallestIndex = rightChildIndex;
    }
    if (smallestIndex !== index) {
      [this.heap[smallestIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[smallestIndex],
      ];
      this.sinkDown(smallestIndex);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();

  for (let list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }

  let dummyHead = new ListNode();
  let current = dummyHead;

  while (!minHeap.isEmpty()) {
    let smallestNode = minHeap.extractMin();
    current.next = smallestNode;
    current = current.next;

    if (smallestNode.next !== null) {
      minHeap.insert(smallestNode.next);
    }
  }

  return dummyHead.next;
}

function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }

  console.log(result.join(" -> "));
}

// Creating linked lists
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let lists = [l1, l2, l3];
let mergedList = mergeKLists(lists);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Additional test cases
let l4 = new ListNode(5, new ListNode(10));
let l5 = new ListNode(7, new ListNode(8));
let l6 = new ListNode(6, new ListNode(11));

let lists2 = [l4, l5, l6];
let mergedList2 = mergeKLists(lists2);
printList(mergedList2); // Output: 5 -> 6 -> 7 -> 8 -> 10 -> 11

// Edge case: Empty list
let lists3 = [];
let mergedList3 = mergeKLists(lists3);
printList(mergedList3); // Output: (Empty output, since no lists are provided)

// Edge case: One empty and one non-empty list
let l7 = null;
let l8 = new ListNode(1, new ListNode(2, new ListNode(3)));

let lists4 = [l7, l8];
let mergedList4 = mergeKLists(lists4);
printList(mergedList4); // Output: 1 -> 2 -> 3
