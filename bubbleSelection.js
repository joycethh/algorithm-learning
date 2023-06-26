function bubbleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);

      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([2, 6, 3, 5]);

//selection
function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[lowest] > arr[j]) {
        [arr[lowest], arr[j]] = [arr[j], arr[lowest]];
        lowest = i;
      }
    }
  }
  console.log(arr);
  return arr;
}

selection([34, 22, 10, 19, 17]);
