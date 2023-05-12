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
    let node = this.root,
      visited = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node); // while the queque is not empty, dequeque the first element in the queue and push to our "visited" array

      if (node.left) queue.push(node.left); // in the meanwhile, we need to add the node's children to the end of the queque if any
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}
const bst = new BSTRecurrive();
// const bst = new BSTSIterate();
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
