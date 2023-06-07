//1480. Running Sum of 1d Array
var runningSum = function (nums) {
  let sums = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (!sums[i + 1]) sums[i + 1] = sum;
  }
  return Object.values(sums);
};

// time-O(n), space-O(n)
//improvement
const runningSum = (nums) => {
  let sums = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sums.push(sum);
  }
  return sums;
};
//time-O(n)

//----------------------------------------------------
//724. Find Pivot Index
var pivotIndex = function (nums) {
  const totalSum = nums.reduce((a, b) => a + b);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
//time-O(n), space-O(1)
//improvement - early termination & edge cases
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1; // handle edge case: empty array
  if (nums.length === 1) return 0; // handle edge case: array with one element

  const totalSum = nums.reduce((a, b) => a + b);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
};
//Alternatively, instead of calcaulate the "leftSum" repeatly each iteration,
//we can pre-calculate the prefix sum and use them later
const pivotIndex = (nums) => {
  const prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  const totalSum = prefixSum[nums.length];
  for (let i = 0; i < nums.length; i++) {
    const leftSum = prefixSum[i];
    const rightSum = totalSum - prefixSums[i + 1];
    if (leftSum === rightSum) return i;
  }

  return -1;
};

//pivotIndex([1, 7, 3, 6, 5, 6]
//prefixSum[0, 0+1, 0+1+7, 0+1+7+3, ....]
