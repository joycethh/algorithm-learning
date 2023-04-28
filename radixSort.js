// define a helper function to get the  digit of the number
const getDigit = (n, i) => {
  return Math.floor(Math.abs(n) / Math.pow(10, i)) % 10;
};

//define a helper function to get the count of the number with most digit
// const digitCount = (n) => {
//     return String(n).length + 1
// }
const digitCount = (n) => {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
};
const mostDigits = (n) => {
  // determine how many times we need to put the numbers in the buckets.
  let maxDigits = 0;
  for (let i = 0; i < n.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(i));
  }
  return maxDigits;
};

const radixSort = (n) => {
  const maxRunCount = maxDigits(n);
  for (let k = 0; k < maxRunCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []); //create empty buckets for the numbers
    //loop through the numbers, put each of them in the right bucket;
    //first start with the rightmost digit
    for (let i = 0; i < n.length; i++) {
      let digit = getDigit(n[i], k);
      buckets[digit].push(n[i]);
    }
    //retrive numbers from bucket and concate into array
    n = [].concat(...buckets);
    console.log(`the ${k} time run, n is ${n}`);
  }
  return n;
};
