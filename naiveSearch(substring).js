function stringSearch(s, t) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      console.log(t[j], s[i + j]);
      if (t[j] !== s[i + j]) break;
      if (j === t.length - 1) count++;
    }
  }
  console.log("count", count);
  return count;
}
stringSearch("wowomgzomg", "omg");
