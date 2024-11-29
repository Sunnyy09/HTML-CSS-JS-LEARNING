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

//
//
//
//Replace a word with dynamic input
function replaceWord(str, newWord) {
  return str.replace("bad", newWord);
}
const result = replaceWord("This is a bad example", "good");
console.log(result);
//
//
//
//Replace using a function
let string = "2 4 6";
const newString = string.replace(/\d/g, (num) => Math.pow(num, 2));
console.log(newString);

//
//
//
//Case-insensitive replacement
let strrr = "Hello world, hello everyone";
const newStrrr = strrr.replace(/hello/gi, "hi");
console.log(newStrrr);
//g (global): This flag tells the replace method to search for all occurrences
// of the pattern in the string, not just the first one.

//i (case-insensitive): This flag makes the search case-insensitive, meaning
//it will match "hello", "Hello", "HELLO", etc.
