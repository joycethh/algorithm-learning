class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Recurrsive Methods
class BSTRecurrive {
  constructor() {
    this.root = null;
  }
  // Inserting a node, Recurrsivly
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    this.insertNode(this.root, newNode);
    return this;
  }
  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      //goes to the left
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      //goes to the right
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  //Search a node, Recurrsivly
  search(val) {
    return this.searchNode(this.root, val);
  }
  searchNode(node, val) {
    if (node === null) return undefined;
    if (val === node.val) return node;
    if (val < node.val) {
      //search Left
      return this.searchNode(node.left, val);
    } else {
      //search right
      return this.searchNode(node.right, val);
    }
  }
}

//Iterative Methods
class BSTSIterate {
  constructor() {
    this.root = null;
  }
  //Insert a node, Iterativly
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.val) return undefined;
      if (value < current.val) {
        //goes to the left
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //Search a node, Iterativly
  search(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        //search from the left
        if (current.left === null) return undefined;
        current = current.left;
      } else {
        //search RIGHT
        if (current.right === null) return undefined;
        current = current.right;
      }
    }
  }
  // Breadth First Search
  bfs() {
    if (!this.root) return [];

    const queue = [this.root];
    const result = [];

    while (queue.length) {
      const node = queue.shift(); //while the queue is not empty, dequeue the first element in the queue
      result.push(node.val); // add that element to our result array

      if (node.left) queue.push(node.left); // in the meanwhile, add the element's children (if any) to the queue
      if (node.right) queue.push(node.right);
    }

    return result;
  }
  dfsPreorder() {
    const result = [];

    const traverse = (node) => {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }
  dfsPostOrder() {
    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    };
    traverse(this.root);
    return result;
  }
  dfsInOrder() {
    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
}
// const bst = new BSTRecurrive();
const bst = new BSTSIterate();
bst.insert(10);
bst.insert(5);
bst.insert(8);
bst.insert(23);
bst.insert(12);
bst.insert(2);
bst.insert(35);
//             10
//
//          5      23
//
//        2  8    12  35
// bfs  [10, 5, 23, 2, 8, 12, 35]
// dfsPreorder  [10, 5, 2, 8, 23, 12, 35]
// dfsPostOrder [2, 8, 5, 12, 35, 23, 10]
// dfsInOrder [2, 5, 8, 10, 12, 23, 35]
