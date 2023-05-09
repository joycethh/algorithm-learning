class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// we are implementing stacks with SSL,
// for the time complexsity, I will add & remove from the beganiing,
// as I don't want to illterate the entire link to remove from the end,
// so actually the methods are UNSHIFT & SHIFT
// but i will still call them PUSH & POP

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    //unshift
    var node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    //shift
    if (this.size === 0) return undefined;
    const remove = this.first;
    this.first = remove.next;
    this.size--;
    if (this.size === 1) {
      this.last = null;
    }
    return remove;
  }
}

const stacks = new Stack();
