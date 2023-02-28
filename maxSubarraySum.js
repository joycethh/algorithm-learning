//sliding windows
function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    //sum = sum + arr[i]
    sum += arr[i];
  }

  let tempSum = sum;
  for (let i = n; i < arr.length; i++) {
    // tempSum = tempSum - arr[i-n] + arr[i]
    tempSum += arr[i] - arr[i - n];
    sum = Math.max(tempSum, sum);
  }

  return sum;
}

//minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//findLongestSubstring Solution
//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#questions/7860030
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

//Find All Anagrams in a String
//https://leetcode.com/problems/find-all-anagrams-in-a-string/
