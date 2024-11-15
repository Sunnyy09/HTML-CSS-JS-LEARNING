function filterNum(arr, callBack) {
  const result = arr.filter(callBack);
  console.log(result);
}

// function filteredValues(val) {
//   return val % 2 !== 0;
// }

// filterNum([1, 2, 3, 4, 5], filteredValues);

filterNum([1, 2, 3, 4, 5], (val) => val % 2 !== 0);
