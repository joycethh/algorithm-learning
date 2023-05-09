class DynamicArray {
  constructor() {
    this.capacity = 10;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  push(element) {
    if (this.length === this.capacity) {
      this._resize();
    }
    this.data[this.length] = element;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return popped;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  _resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }
}

//implement dynamic array with helper functions
// create an object called dynamic array
const DynamicArray = {
  capacity: 10,
  length: 0,
  data: new Array(10),

  push(element) {
    if (this.length === this.capacity) {
      this._resize();
    }
    this.data[this.length] = element;
    this.length++;
  },

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return popped;
  },

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  },

  _resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  },
};
