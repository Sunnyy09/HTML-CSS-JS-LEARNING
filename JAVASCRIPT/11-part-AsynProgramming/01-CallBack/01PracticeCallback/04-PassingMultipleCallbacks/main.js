function doMath(a, b, addNumbers, multiplyNumbers) {
  if ((a + b) % 2 === 0) {
    addNumbers(a + b);
  } else {
    multiplyNumbers(a * b);
  }
}

doMath(5, 5, console.log, console.log);
doMath(5, 6, console.log, console.log);
//Other way to call the multiple callbacks in function
doMath(
  5,
  8,
  (sum) => console.log(sum),
  (mult) => console.log(mult)
);
