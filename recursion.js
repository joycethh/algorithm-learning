//HELPER METHOD PATTERN
function outer(input) {
  let outerVariable = [];

  function inner(innerInput) {
    //do something to modify the outerVariable
    inner(innerInput--);
  }

  inner(input);

  return outerVariable;
}

//example, collect odd number in an array
function collectOdd(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length == 0) return;
    if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// PURE RECURSION FUNCTION
// when you need to modifiy the result arr, string, object,
// you can use concat(), join() and etc function
function collectOdd(arr) {
  let result = [];

  if (arr.length == 0) return result;
  if (arr[0] % 2 === 1) {
    result.push(arr[0]);
  }
  console.log(result.concat(collectOdd(arr.slice(1))));
  return result.concat(collectOdd(arr.slice(1)));
}
