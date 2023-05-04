class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var myNewNode = new Node(val);
    if (!this.head) {
      this.head = myNewNode;
      this.tail = myNewNode;
    } else {
      this.tail.next = myNewNode;
      myNewNode.prev = this.tail;
      this.tail = myNewNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    var tmp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tmp.prev;
      this.tail.next = null;
    }
    this.length--;
    return tmp;
  }
}

var myDoubleList = new DoublyLinkedList();
myDoubleList.push("10");
