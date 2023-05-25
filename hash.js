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
//---------------------------------------------------------------------------
// a hash table class
class HashTable {
  constructor(size = 53) {
    // represents the number of slots avaible for storing key-value pairs in hash table
    this.keyMap = new Array(size); //array of length 'size' that will hold the key-value pairs
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96; //convert the characters to numerical values
      total = (total * WEIRD_PRIME + value) % this.keyMap.length; // the modulo operation with the length of the 'keyMap' array
      //to ensure the hash values falls within the valid index range.
    }
    return total; // the hash value determine the index where the key-value pair will be stored in the 'keyMap' array.
  }
  set(key, value) {
    // accepts a key and value
    // hashes the key
    // stores the key-value pair in the hash table array via Seperate Chaining
    let index = this._hash(key); //index is the hashed key, and we want to store the key-value pair at this index
    if (!this.keyMap[index]) {
      this.keyMap[index] = []; // [ , , , , [[key, value], [key, value]], , , ]
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    //accepts a key
    //hashes the key
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // loop through the array at the index to find the nested array value matches what we look for.
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]; //return the value
        }
      }
    }
    return undefined;
  }
  keys() {
    let resultKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!resultKeys.includes(this.keyMap[i][j][0])) {
            resultKeys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return resultKeys; //[, , , [[key, value], [key, value]], [[key, value]], []]
  }
  values() {
    let resultValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!resultValues.includes(this.keyMap[i][j][1])) {
            resultValues.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return resultValues; //[, , , [[key, value], [key, value]], [[key, value]], []]
  }
}

const ht = new HashTable();
ht.set("yellow", "#FFFF00"); //key-value pair
ht.set("Cyan", "#00FFFF");
ht.set("white", "#fffff");
ht.set("black", "#00000");
ht.set("red", "#ff000");
ht.set("green", "#00ff00");
