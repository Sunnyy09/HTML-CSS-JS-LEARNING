const arr = [1, 2, 3, 4, 5];

const output = arr.map((num) => (num += 10));
console.log(arr);
console.log(output);

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

const fullName = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullName);
