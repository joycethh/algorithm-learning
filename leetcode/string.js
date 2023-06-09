//205. Isomorphic Strings
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== map[t[i]]) return false;
    map[s[i]] = i;
    map[t[i]] = i;
    console.log("s[i]-i pairs", [s[i]]);
  }
  return true;
};
// time-o(n), space-o(1)
// WRONG SOLUTION! case (13, 42) failed

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], i);
  }
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], i);
  }
  return _.isEqual(Array.from(sMap.values()), Array.from(tMap.values()));
};
//time o(n), spaceo(n)

//IMPROVEMENT
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap.has(sChar) && sMap.get(sChar) !== tChar) {
      return false;
    }

    if (tMap.has(tChar) && tMap.get(tChar) !== sChar) {
      return false;
    }

    sMap.set(sChar, tChar); //sMap = Map(5) {'s' => s, 'h'=> h, 'i'=> i, 'r'=> r, 't'=>'k}
    tMap.set(tChar, sChar); //tMap = Map(5) {'s' => s, 'h'=> h, 'i'=> i, 'r'=> r, 'k'=>'t}
  }

  return true;
};

//isIsomorphic('shirts', 'shirks')

//_____________________________________________________
//392. Is Subsequence

//------- two pointers approach
function isSubsequence(s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] == t[j]) {
      i++;
    }
  }
  return i === s.length;
}
//time-O(t), space-O(1)

//----- DP Approach
var isSubsequence = function (s, t) {
  const m = s.length;
  const n = t.length;

  // Initialize dp array
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false)); //dp = Array(4) [
  //0:(7)  [false, false, false, false, false, false, false],
  //1: (7)  [false, false, false, false, false, false, false],
  //2: (7)  [false, false, false, false, false, false, false],
  //3: (7)   [false, false, false, false, false, false, false]
  //]

  // Set the first row to true
  for (let j = 0; j <= n; j++) {
    dp[0][j] = true;
  }
  // dp = Array(4) [
  //0: (7)   [true, true, true, true, true, true, true],
  //1: (7)  [false, false, false, false, false, false, false],
  //2: (7)  [false, false, false, false, false, false, false],
  //3: (7)   [false, false, false, false, false, false, false]
  //]

  // Fill the dp array
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s[i] === t[j]) {
        dp[i + 1][j + 1] = dp[i][j];
        console.log("match case - dp[i][j]", dp[i][j]);
        //first run, i=0, j=0, m=3, n=6, s="abc", t="ahbgdc", dp[1][1] = true
        //dp: Array(4) [
        // 0: (7) [true, true, true, true, true, true, true]
        // 1: (7) [false, true, false, false, false, false, false] ---------//dp[1][1] = true
        // 2: (7) [false, false, false, false, false, false, false]
        // 3: (7) [false, false, false, false, false, false, false]
        //]

        //second run, i=0, j=1, m=3, n=6
        //dp: Array(4) [
        // 0: (7) [true, true, true, true, true, true, true]
        // 1: (7) [false, true, true, false, false, false, false] ---------//dp[1][2] = dp[1][1] = true
        // 2: (7) [false, false, false, false, false, false, false]
        // 3: (7) [false, false, false, false, false, false, false]
        //]

        //third run, i=0, j=2, m=3, n=6, s[0]=a, t[2]=b
        //dp: Array(4) [
        // 0: (7) [true, true, true, true, true, true, true]
        // 1: (7) [false, true, true, false, false, false, false] ---------//dp[1][3] = dp[1][2] = true
        // 2: (7) [false, false, false, false, false, false, false]
        // 3: (7) [false, false, false, false, false, false, false]
        //]
      } else {
        console.log("NOTMATCH case - dp[i][j]", dp[i][j]);
        dp[i + 1][j + 1] = dp[i + 1][j];
      }
    }
  }

  return dp[m][n];
};

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
