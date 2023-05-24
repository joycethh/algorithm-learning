//write a hash function which accepts a input and the slot size avaialble for the output
// return the index postion of the input

const hash = (key, arrayLen) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

//problems with this function are:
// not constant time
// collison
// data clustered

const hashImprove = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31; //even prime number is better than even
  for (let i = 0; i < Math.min((key.length, 100)); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};
// this function introduces prime number which will make the value data distrubuted uniformally.
// and only loop through the maxisum 100 characters will reduce the running time

// a hash table class
class HashTable {
  constructor(size = 53) {
    //slot size avaiable for the output value
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min((key.length, 100)); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  _set(key, value) {
    // accepts a key and value
    // hashes the key
    // stores the key-value pair in the hash table array via Seperate Chaining
    let index = this._hash(key); //index is the hashed key, and we want to store the key-value pair at this index
    if (!this.keyMap[index]) {
      this.keyMap[index] = []; // [ , , , , [], , , ]
    }
    this.keyMap[index].push([key, value]);
  }
}
