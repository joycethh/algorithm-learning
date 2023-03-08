function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    //note that j=i-1, which is the last element of the left side sorted array
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

//Below is same function with step explanation
function insertion11(arr) {
  for (let i = 1; i < arr.length; i++) {
    //choosing the first elemnent in our unsorted subarray, the right fraction
    // consider arr[1] as "sorted" by default
    // everything to the left of the "current" value is sorted
    let current = arr[i];

    //choosing the last element as that "sorted" subarray
    let j = i - 1;

    //swap
    while ((j >= 0) & (arr[j] > current)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

insertion11([5, 2, 4, 6, 1, 3]);
