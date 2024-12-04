let array = [
  { name: "John", age: 20 },
  { name: "Max", age: 50 },
  { name: "Don", age: 35 },
];

//fetch only names
const names = array.map((data) => data.name);
console.log(names);

//fetch data whose age is greater than 20
const output = array.filter((val) => val.age > 20);
console.log(output);

//fetch only names whose age is greater than 20
const newNames = output.map((obj) => obj.name);
console.log(newNames);

//add the ages of all users
const totalValue = array.reduce((sum, index) => (sum += index.age), 0);
console.log(totalValue);

//using map method: but it is unconventional
let sum = 0;
array.map((obj) => (sum += obj.age));
console.log(sum);

//update the values with copy all another values
let updatedArray = array.map((obj) => ({
  ...obj,
  age: obj.age * 2,
}));
console.log(updatedArray);

//using for-Each
array.forEach((obj) => (obj.age *= 2));
console.log(array);
