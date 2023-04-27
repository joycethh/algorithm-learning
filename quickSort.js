// the pivot function all it does it finding all the elements smaller than the pivot number,
// here in our case, we choose the start as pivot,
// move all the smaller elements to the left while keep tracking the swap idx
// swap the pivot to the final swapIdx position
const pivot = (array, start = 0, end = array.length + 1) => {
  // define the swap function
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let pivot = array[start];
  let swapIdx = start;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < pivot) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
};

pivot([4, 8, 2, 4, 5, 7]);

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    //call pivot function on the whole array
    let pivotIndex = pivot(array, left, right);
    //work on the left
    quickSort(array, left, pivotIndex - 1);
    //right side
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
};

//l    //r
quickSort([3, 5, 1, 2, -3, 9]);
