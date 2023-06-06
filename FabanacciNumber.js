//Fabanacci Number--Dynamic Coding
const fib = (n) => {
  //TABULATED, bottom-up manner
  if (n <= 1) return n;
  let n1 = 0,
    n2 = 1,
    sum;
  for (let i = 2; i <= n; i++) {
    console.log("i", i);
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
}; ///  TIME COMPLEXITY O(N), SPACE COMPLEXSITY O(1)

//Fabanacci Number--Recursive
const fibRecursive = (n) => {
  if (n <= 2) return 1;
  let sum;
  sum = fibRecursive(n - 1) + fibRecursive(n - 2);
  return sum;
}; /// O(2^n) ------------ Problem with this solution is that we have to recalculate again and again

const fibRecursiveWithMemo = (n) => {
  let sums = { 1: 1, 2: 2 };
  if (!sums[n]) {
    sums[n] = fibRecursiveWithMemo(n - 1) + fibRecursiveWithMemo(n - 2);
  }
  return sums[n];
}; ///  TIME COMPLEXITY O(N), SPACE COMPLEXSITY O(N)

//Climbing Stairs-LeetCode
var climbStairs = function (n) {
  //approach 1, bottom to up
  let curr = 1,
    prev = 1,
    temp = 0;
  for (let i = 1; i < n; i++) {
    temp = curr;
    curr = curr + prev;
    prev = temp;
  }
  return curr;
};

const climbStairs2 = (n) => {
  // approach 2, recursion with memoization
  let ways = { 1: 1, 2: 2 };
  if (!ways[n]) {
    ways[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  console.log("ways", ways);
  return ways[n];
};
