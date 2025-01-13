const data = 100;

console.log(data.toString());
// console.log(100.toString()); // SyntaxError: Invalid or unexpected token

/* this error is occurred due to "." operator because in JS, there is two meaning
of this operator, first I access the object property and second decimal places 
thats why the parser is confused.
To solve this error, we can fix it by 
 - putting the 100 in brackets
 - by using two ".."

*/

console.log((100).toString());
console.log((100).toString());
