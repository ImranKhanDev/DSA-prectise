/**
 *
 *  write a function that take an array and value.
 * Find the value from the array and return the index
 * where find the value
 *
 * */

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return i;
  }
  return -1;
}

console.log(linearSearch([2, 4, 7, 9], 9));
