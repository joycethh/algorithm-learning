//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s, t) {
  //two pointers approach
  // create two pointer, i=0, j=0
  // loop through t,
  // compare s[i] t[i]
  // s[i] == t[j], i++
  // s[i] !== t[j], do nothing but just continue the loop
  // compare i, s.length, if euqal, return true

  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] == t[j]) {
      i++;
    }
  }

  //   console.log("i", i);
  //   if (i === s.length) {
  //     console.log("true-case");
  //     return true;
  //   }
  //   return false;
  return i === s.length;
}
isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
