//Limit the Splitting:
let numbers = "one,two,three,four";
console.log(numbers.split(",", 2));
//
//
//Remove Extra Spaces:
let messySentence = "   Learn  JavaScript  fast   ";
console.log(messySentence.trim().split(/\s+/));
// /\s+/ matches one or more whitespace characters, effectively handling
//multiple spaces.

//
//
//
//Dynamic Splitting with RegExp:
let mixedString = "abc123def45";
console.log(mixedString.split(/(\d)/));

//
//
//
//Using Split for Sentence Reversal:
let sentence = "Frontend development is exciting";
let reverseSentence = sentence.split(" ").reverse(); //.join(" ");
console.log(reverseSentence);

//
//
//
//Counting Words in a String:
let text = "Count how many words are here";
const wordCount = text.split(" ").length;

//For counting char
//const wordCount = text.length;
console.log(wordCount);
