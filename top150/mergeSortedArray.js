var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for merged array

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  console.log("nums1", nums1);
  return nums1;
};

merge([4, 7, 9], 3, [2, 5, 6], 3);

//after 1st run, nums1=[4,7,9, empty*2, 9]
//after 2nd run, nums1=[4,7,9, empty*1, 7,9]
