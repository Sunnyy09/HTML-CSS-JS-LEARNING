//Replace a character at a specific position
let str = "abcdef";
const newStr = str.substring(0, 2) + "X" + str.substring(3);
console.log(newStr);

const anotherStr = str.replace(/^(.{2})./, "$1X");
console.log(anotherStr);

// /.../ : Delimiters that denote the start and end of the regex.
///^(.{2})./: This regular expression matches the first two characters (.{2})
//and the third character (.) of the string.
// - ^ asserts the start of the string.
// - (.{2}) captures the first two characters.
// - . matches the third character.

//"$1X": The replacement string, where $1 refers to the first captured group
//(the first two characters), and X is the new character you want to insert.

//
//
//
//Replace the fourth character of a string with Y.
let string = "javascript";
let newString = string.replace(/^(.{3})./, "$1Y");
console.log(newString);

//
//
//
//Replace using capture groups
let strr = "John Doe";
let swapName = strr.replace(/(\w+) (\w+)/, "$2, $1");
console.log(swapName);

let helloStr = "Hello World";
let newHelloStr = helloStr.replace(/(\w+) (\w+)/, "$2, $1");
console.log(newHelloStr);

//
//
//
//Replace multiple spaces with a single space
let strrr = "This    is    a     string";
let newStrrr = strrr.replace(/\s+/g, " ");
console.log(newStrrr);
//\s: This matches any whitespace character (spaces, tabs, newlines).
//+: This quantifier matches one or more occurrences of the preceding token
//(\s), meaning it will match consecutive spaces.
