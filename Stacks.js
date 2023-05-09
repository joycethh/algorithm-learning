class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// we are implementing stacks with SLL,
// for the time complexsity, I will add & remove from the beganiing,
// as I don't want to illterate the entire link to remove from the end, I want instant time pop
// so actually the methods are UNSHIFT & SHIFT
// but i will still call them PUSH & POP

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    //LL unshift
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
    //LL shift
    if (!this.first) return null;
    const remove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = remove.next;
    this.size--;
    return remove.val;
  }
}

const stacks = new Stack();
// we are implement queue with SLL,
// there are two main operations on the queue -  add & remove,
// since remove the end will require a literation to the entire SLL, so we remove from the begaining

class Queque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    // LL push
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    //LL shift
    if (!this.first) return null;
    var current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current.val;
  }
}

const myQueue = new Queque();
