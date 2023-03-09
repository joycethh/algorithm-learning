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

merge([1, 7, 8], [3, 4, 5, 10]);
