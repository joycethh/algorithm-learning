// Piority Queque

class Node {
  constructor(val, piority) {
    this.value = val;
    this.piority = piority;
  }
}
class PiorityQueque {
  constructor() {
    this.values = [];
  }

  enqueque(val, piority) {
    let newNode = new Node(val, piority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];

      if (element.piority >= parentElement.piority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;

      idx = parentIdx;
    }
    return this.values.piority;
  }
}

const minHeap = new PiorityQueque();
minHeap.enqueque("pack luggage", 0);

//           0
//       1       2
//     7   4   8   6
//
