function printEachElement(arr, callBack) {
  arr.forEach(callBack);
}

printEachElement([1, 2, 3, 4, 5], console.log);

function printEachVal(arr, callBack) {
  arr.forEach((val) => {
    callBack(val);
  });
}
// printEachVal([1, 2, 3, 4, 5], console.log);
