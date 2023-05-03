//the linked list is using es2015 class key words pattern

class Node {
  constructor(val) {
    this.val = val; //val - piece of data
    this.next = null; //next - reference to the next node
  }
}

var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");

//if we run "first", it will show -  Node {val: "hi", next: Node}
// next object will be like - Node{ val: "there", next: Node}

// the example above of interfacing the linkedList is way to hedious,
// so we can create instance methods to do so.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var myNewNode = new Node(val); //make a new Node

    if (!this.head) {
      this.head = myNewNode;
      this.tail = this.head;
    } else {
      this.tail.next = myNewNode;
      this.tail = myNewNode;
    }
    this.length++;
    return this; //return the list
  }
  pop() {
    if (this.length === 0) return undefined;
    //if(! this.head) return undefined;

    //traverse the list to find the tail and the one before the tail
    // 1. start with two vars, one is pre to the tail, which will be the new tail
    // 2. the other val is the tail which we will be removed and returned
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    var tmp = this.head; //tmp is the current head that will be removed;
    this.head = tmp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return tmp;
  }
  unshift(val) {
    var myNode = new Node(val);
    if (!this.head) {
      // if there is no head property, set the head and tail to be the newly created node.
      this.head = myNode;
      this.tail = this.head;
    } else {
      myNode.next = this.head; //otherwise, set the newly created node's next property to be the current head propery on the list
      this.head = myNode; //set the head propery on the list to be the newly created node
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var count = 0;
    var current = this.head;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(idx, val) {
    var selected = this.get(idx);
    if (selected === null) return false;
    selected.val = val;
    return true;
  }
}

var myList = new LinkedList();
// myList.push("Hello");
//  the result will be - LinkedList {
//     head: Node {val: "Hello", next: null},
//     length: 1,
//     tail: Node {val: 'Hello', next: null}
// }
