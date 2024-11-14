function doubleArray(arr, callBack) {
  const result = arr.map(callBack);
  console.log(result);
}

function doubleEachVal(val) {
  return val * 2;
}

// doubleArray([1, 2, 3], doubleEachVal);

doubleArray([1, 2, 3], (val) => val * 2);
