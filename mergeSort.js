//merge two sorted array
const merge = (first, second) => {
  let result = [];
  let idxOne = 0;
  let idxSnd = 0;
  let current = 0;
  while (current < first.length + second.length) {
    if (first[idxOne] < second[idxSnd]) {
      result[current] = first[idxOne];
      console.log("< case-result", result);
      idxOne++;
    } else {
      result[current] = second[idxSnd];
      idxSnd++;
    }
    current++;
  }
  console.log("result", result);
  return result;
};

// merge([1, 7, 8], [3, 4, 5, 10]);

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  const result = merge(left, right);
  console.log("result", result);
  return merge(left, right);
};

mergeSort([1, 7, 8, 3, 4, 5, 10]);
