function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log(i, j);
      arr[j + 1] = arr[j]; //move the bigger value to the right
      arr[j] = currentValue;
    }
  }
  console.log(arr);
  return arr;
}

insertion([1, 2, 9, 76, 4]);

// insertion sort is taking the current value insert into the left already sorted portion.
