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
