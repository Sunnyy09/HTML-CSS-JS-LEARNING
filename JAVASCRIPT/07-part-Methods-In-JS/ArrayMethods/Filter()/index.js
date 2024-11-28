const arr = [1, 2, 3, 4, 5];

const output = arr.filter((num) => num % 2);

console.log(output);

//use filter() to return only the users having age greater than 30 in an array.
const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

const result = users.filter(({ age }) => age > 30);
console.log(result);
