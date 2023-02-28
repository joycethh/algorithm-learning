// Multiple pointers, need to be sorted array
function averagePair(a, target) {
  // two pointers
  // create two pointers, i = 0, j = a.length -1
  // create variable average to store the average value
  // compare to the target
  // average > target, j--
  // avaerage <  target, i++
  // average = target return true
  // the above comparasion should run in condition while i < j
  let i = 0;
  let j = a.length - 1;
  while (i < j) {
    let average = (a[i] + a[j]) / 2;
    if (average == target) {
      return true;
    } else if (average < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

//count unique values
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([-2, -1, -1, 0, 1]); // 4

//are there duplicates
//Approach 1 --- Frequency Counter
function areThereDuplicates(...args) {
  let obj = {};

  for (let e of args) {
    if (!obj[e]) {
      obj[e] = 1;
    } else {
      return true;
    }
  }
  return false;
}

//Approach 2 --- Multiple Pointers
function areThereDuplicates2(...args) {
  const sorted = args.sort();
  console.log("sorted", sorted);

  let i = 0;
  let j = 1;
  while (j < sorted.length) {
    if (sorted[i] == sorted[j]) {
      console.log("true-result");
      return true;
    }
    i++;
    j++;
  }
  return false;
}
areThereDuplicates2("a", "b", "c", "a"); // true

// while loop can also be replaced with for loop
//  for(let j = 1; j< sorted.length; j++) {
//      if(sorted[i] == sorted[j]) {
//         console.log('true-result22')
//        return true
//     } else {
//         i++
//     }
// }
