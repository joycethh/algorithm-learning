// insertion sort is taking the current value insert into the left already sorted portion.

//with step explanation
function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    //choosing the first elemnent in our unsorted subarray, the right fraction
    // consider arr[1] as "sorted" by default
    // everything to the left of the "current" value is sorted
    let current = arr[i];

    //choosing the last element as the left side "sorted" subarray
    let j = i - 1;

    //swap
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; //move the bigger value to the right
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

insertion([5, 2, 4, 6, 1, 3]);

// using for loop, exact same logic as above function
function insertion11(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log(i, j);
      arr[j + 1] = arr[j];
      arr[j] = currentValue;
    }
  }
  console.log(arr);
  return arr;
}
