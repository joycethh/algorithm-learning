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
      tmp.prev = null; //cut the linkeage from the old tail to the previous node
    }
    this.length--;
    return tmp;
  }
  shift() {
    if (this.length === 0) return undefined;
    var tmp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = tmp.next;
      this.head.prev = null;
      tmp.next = null;
    }
    this.length--;
    return tmp;
  }
  unshift(val) {
    var newHead = new Node(val);
    newHead.next = this.head;
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
}
var myDoubleList = new DoublyLinkedList();
myDoubleList.push("10");
