class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;

      idx = parentIdx;
    }
    return this.values;
  }
  extractMax() {
    if (this.values.length === 0) return null;
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      percolateDown();
    }

    return max;
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
        if (leftChild > element) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightChild];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(41);
maxHeap.insert(39);

// extractMax() {
//     if (this.values.length === 0) return null;

//     [this.values[0], this.values[this.values.length - 1]] = [
//       this.values[this.values.length - 1],
//       this.values[0],
//     ];
//     const oldRoot = this.values.pop();

//     let parentIdx = 0;
//     let leftIdx = parentIdx * 2 + 1;
//     let rightIdx = parentIdx * 2 + 2;

//     while (leftIdx < this.values.length && rightIdx < this.values.length) {
//       let leftChild = this.values[leftIdx];
//       let rightChild = this.values[rightIdx];
//       let parent = this.values[parentIdx];

//       if (rightChild > leftChild) {
//         if (parent >= rightChild) break;
//         // [parent, rightChild] = [rightChild, parent]; /// this line only operate inside the extractMax function scope,
//         this.swap(parentIdx, rightIdx); /// need to update the values in the this.values array
//         parentIdx = rightIdx;
//       } else {
//         if (parent >= leftChild) break;
//         this.swap(parentIdx, leftIdx);
//         parentIdx = leftIdx;
//       }
//       leftIdx = parentIdx * 2 + 1;
//       rightIdx = parentIdx * 2 + 2;
//     }

//     return oldRoot;
//   }

//   swap(i, j) {
//     [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
//   }
