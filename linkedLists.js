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
}

var myList = new LinkedList();
myList.push("Hello");
//  the result will be - LinkedList {
//     head: Node {val: "Hello", next: null},
//     length: 1,
//     tail: Node {val: 'Hello', next: null}
// }
