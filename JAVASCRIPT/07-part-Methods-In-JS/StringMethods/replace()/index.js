//string.replace(searchValue, newValue);
let text = "Hello, world!";
let newtext = text.replace("world", "javascript");
console.log(newtext);

//
//To replace all occurrences, you can use a regular expression with the
//global flag (/g):
let str = "Hello, world! Welcome to the world!";
let newStr = str.replace(/world/g, "JavaScript");
console.log(newStr);
console.log(str);

//
//
//You can also pass a function as the second argument to replace() to perform
// a more complex replacement:
let strr = "The price is 100 dollars.";
let newStrr = strr.replace(/\d+/g, (num) => parseInt(num) * 2);
console.log(newStrr);
