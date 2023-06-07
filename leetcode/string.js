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

//two pointers approach
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

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
