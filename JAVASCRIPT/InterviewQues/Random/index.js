function abc() {
  console.log(abc.xyz);
}
abc();

abc.xyz = `Hello World`;
abc.xyz = `Hello javascript`;
abc();

//event propagation

const numbers = [1, 2, 3, 4];
numbers[100] = 500;
console.log(numbers);

console.log(typeof typeof 100);

const array = [..."hello"];
// const str = "hello";
// const array = [...str];
//these both array are same in the term of copy values
console.log(array);

//parseInt() : it converts the value into number
console.log(parseInt("8"));

console.log(parseInt("10 + 2"));
console.log(parseInt("7FM"));
console.log(parseInt("M7F"));

// console.log(isNaN("sunny"));

console.log(
  [1, 2, 3].map((val) => {
    if (val > 0) return;
    return val * 2;
  })
);

function ab() {
  return;
}
console.log(ab()); //undefined beacuse we not defined anything to return like value.

{
  function aa() {
    console.log("John");
  }
}
aa();

// {
//   const a = () => {
//     console.log("John");
//   };
// }
// a(); //ReferenceError: a is not defined

// function xyz(a, b) {
//   "use strict";
//   a = 100;
//   b = 200;
//   return args[0] + args[1];
//   // return arguments[0] + arguments[1];
//   console.log(a + b);
// }
// console.log(xyz(300, 400));

const arr = [1, 2, 3, 4, 5, 6, 3, 3, 7, 8];
const res = arr.forEach((val) => {
  if (val === 3) {
    console.log("Found 3, skipping the rest");
    return;
  }
  console.log(val);
});

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = num.map((val) => val === 4);
console.log(result);
