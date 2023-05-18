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
}

const maxHeap = new MaxHeap();
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(41);
maxHeap.insert(39);
