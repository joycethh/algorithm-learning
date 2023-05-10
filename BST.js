class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
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
    if (!this.root) return undefined;
    if (val === this.root.val) return this.root;
    searchNode(this.root, val);
    return val;
  }
  searchNode(node, val) {
    if (node.val > val) {
      //search left
      if (node.val === val) {
        console.log("found in the left, the node is", node);
        return node;
      } else {
        this.insertNode(node.left, val);
      }
    } else {
      //search right
      if (node.val === val) {
        console.log("found in the RIGHT, the node is", node);
        return node;
      } else {
        this.searchNode(node.right, val);
      }
    }
  }
}

class BSTSIterate {
  constructor() {
    this.root = null;
  }
  //Insert a node, Iterativly
  insertIterate(value) {
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
  searchIterate(val) {
    if (!this.root) return undefined;
    if (val === this.root.val) return val;
    let current = this.root;
    while (true) {
      if (val === current.val) return val;
      if (val < current.val) {
        //search from the left
        if (current.val === val) {
          return val;
        }
        current = current.left;
      } else {
        if (current.val === val) {
          return val;
        }
        current = current.right;
      }
    }
  }
}
const bst = new BST();
