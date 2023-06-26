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

function insertion(arr) {
  //firstRun: arr(6)[5, 2, 4, 6, 1, 3]; secondRun: arr=[5, 5, 4, 6, 1, 3]; thirdRun: arr=[2, 5, 4, 6, 1, 3]
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // firstRun: current = 2 as i = 1; secondRun: current = 2, as i = 1; thirdRun: current = 4, as i = 2
    let j = i - 1; //firstRun: j= 0; secondRun: j=-1

    while (j >= 0 && arr[j] > current) {
      // firstRun: j=0, arr[j] = 5,
      arr[j + 1] = arr[j]; //firstRun: arr[j+1], arr[1] = 5,  arr=[5, 5, 4, 6, 1, 3]
      j--; //firstRun: j= -1;
    }

    arr[j + 1] = current; //secondRun: j+1 = 0, arr[0] = 2, arr=[2, 5, 4, 6, 1, 3]======break out of the inner loop
  }

  console.log(arr);
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
