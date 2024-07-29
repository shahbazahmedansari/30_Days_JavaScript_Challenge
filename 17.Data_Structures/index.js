// Activity-1: Linked List:

// Task-1: Implement a "Node" class to represent an element in a linked list with properties "value" and "next".

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new Node(10);
const node2 = new Node(10, node1);
const node3 = new Node(node1, node2);
console.log(node1);
console.log(node2);
console.log(node3);

// Task-2: Implement a "LinkedList" class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  addNode(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNode() {
    if (!this.head) {
      console.log("This list is empty");
      return;
    }

    if (!this.head.next) {
      return null;
    }

    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  display() {
    if (!this.head) {
      console.log("This list is empty.");
      return;
    }

    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const newList = new LinkedList();
newList.addNode(10);
newList.addNode(20);
newList.addNode(30);
newList.addNode(40);
console.log("List after adding nodes:");
newList.display();

newList.removeNode();
console.log("List after removing the last node:");
newList.display();

newList.removeNode();
newList.removeNode();
console.log("List after removing all nodes:");
newList.display();

// Activity-2: Stack:

// Task-3: Implement a "Stack" class with methods "push" (add element), "pop" (remove element), and "peek" (view the top element).

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop the element";
    }

    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop the element";
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
const stack = new Stack(); // Creating a new Stack instance
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30

console.log("Removed element:", stack.pop()); // Output: 30
console.log("Top element after pop:", stack.peek()); // Output: 20

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Stack size:", stack.size()); // Output: 2

// Task-4: Use the "Stack" class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
  // Creating a new Stack instance
  const stack1 = new Stack();
  // Push each character of the string onto the stack
  for (let char of str) {
    stack1.push(char);
  }
  let reversed = "";
  // Pop characters from the stack and add them to the reversed string
  while (!stack1.isEmpty()) {
    reversed += stack1.pop();
  }
  return reversed;
}

const originalString = "hello";
const reversedString = reverseString(originalString);

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

// Activity-3: Queue:

// Task-5: Implement a "Queue" class with methods "enqueue" (add element), "dequeue" (remove element), and "front" (view the first element).

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("This queue is empty.");
    }

    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return null;
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }
    console.log(this.items.join(", "));
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue after enqueuing elements:");
queue.display();

console.log("Front element of the queue:", queue.front());

console.log("Dequeue an element:", queue.dequeue());
console.log("Queue after dequeuing an element:");
queue.display();

console.log("Front element of the queue:", queue.front());

// Task-6: Use the "Queue" class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

function simulatePrinterQueue(printJobs) {
  const printQueue = new Queue();

  for (let job of printJobs) {
    console.log(`Adding print job: ${job}`);
    printQueue.enqueue(job);
  }

  console.log("\nProcessing print jobs:");

  while (!printQueue.isEmpty()) {
    const currentJob = printQueue.dequeue();
    console.log(`Processing print job: ${currentJob}`);
  }
}

const jobs = [
  "Document1.pdf",
  "Image2.png",
  "Presentation3.pptx",
  "Report4.docx",
];
simulatePrinterQueue(jobs);

// Activity-4: Binary Tree:

// Task-7: Implement a "TreeNode" class to represent a node in a binary tree with properties "value", "left" and "right".

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const leftChild = new TreeNode(2); // Create a left child node with value 2
const rightChild = new TreeNode(3); // Create a right child node with value 3
const root = new TreeNode(1, leftChild, rightChild); // Create the root node with value 1

console.log("Root node value:", root.value); // Output: 1
console.log("Left child value:", root.left.value); // Output: 2
console.log("Right child value:", root.right.value); // Output: 3

// Task-8: Implement a "BinaryTree" class with methods for inserting values and performing in-order traversal to display nodes.

class TreeNode1 {
  constructor(value, left = null, right = null) {
    this.value = value; // Value of the node
    this.left = left; // Reference to the left child node
    this.right = right; // Reference to the right child node
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value); // Create a new node with the given value
    if (this.root === null) {
      this.root = newNode; // If tree is empty, set the new node as root
    } else {
      this._insertNode(this.root, newNode); // Otherwise, insert the node into the tree
    }
  }

  // Helper method to insert a node into the binary tree
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // If new value is less, go to the left child
      if (node.left === null) {
        node.left = newNode; // If no left child, set new node as left child
      } else {
        this._insertNode(node.left, newNode); // Recursively insert into the left subtree
      }
    } else {
      // If new value is greater or equal, go to the right child
      if (node.right === null) {
        node.right = newNode; // If no right child, set new node as right child
      } else {
        this._insertNode(node.right, newNode); // Recursively insert into the right subtree
      }
    }
  }

  // Method to perform in-order traversal of the binary tree
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left); // Traverse left subtree
      console.log(node.value); // Visit node
      this.inOrderTraversal(node.right); // Traverse right subtree
    }
  }
}
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal(); // Output: 2, 3, 4, 5, 6, 7, 8

// Activity-5: Graph (Optional):

// Task-9: Implement a "Graph" class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Method to add an edge to the graph
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  }

  // Method to perform Breadth-First Search
  bfs(startingVertex) {
    const queue = [startingVertex];
    const result = [];
    const visited = {};
    visited[startingVertex] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("BFS starting from vertex A:");
console.log(graph.bfs("A"));

// Task-10: Use the "Graph" class to represent a simple network and perform BFS to find the shortest path between two nodes.

// Method to perform Breadth-First Search and find the shortest path
function bfsShortestPath(start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length) {
    const path = queue.shift();
    const vertex = path[path.length - 1];

    if (!visited.has(vertex)) {
      const neighbors = graph.adjacencyList[vertex];

      for (const neighbor of neighbors) {
        const newPath = [...path, neighbor];
        queue.push(newPath);

        if (neighbor === end) {
          return newPath;
        }
      }

      visited.add(vertex);
    }
  }

  return null; // Return null if no path is found
}
const startNode = "A";
const endNode = "F";

console.log(`Shortest path from ${startNode} to ${endNode}:`);
console.log(bfsShortestPath(startNode, endNode));
