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

  dequeque() {
    if (this.values.length === 0) return null;
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      percolateDown();
    }
    return min;
  }
  percolateDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;
      let leftChild, rightChild;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild.piority < element.piority) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swapIdx !== null && rightChild.piority < leftChild.piority) ||
          (swapIdx === null && rightChild.piority < element.piority)
        ) {
          swapIdx = rightIdx;
        }
      }
    }
  }
}

const minHeap = new PiorityQueque();
minHeap.enqueque("pack luggage", 0);

//           0
//       1       2
//     7   4   8   6
//
