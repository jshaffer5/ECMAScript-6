// ES6 introduces the spread operator, which allows us to expand arrays and other 
// expressions by unpacking them into places where multiple parameters or elements are expected.

function frankenSplice(arr1, arr2, n) {
  let combined_arr = [...arr2];
  combined_arr.splice(n, 0, ...arr1); // splice( starting index, # items to remove, items... )

  return combined_arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
