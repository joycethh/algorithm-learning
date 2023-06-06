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

//test 