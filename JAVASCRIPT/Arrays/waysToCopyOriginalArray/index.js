const original = [1, 2, 3, { id: 1, title: "hello javascript" }];

//using spread operator: The simplest and most modern way to create a shallow copy.
const spreadCopy = [...original];
console.log("spreadCopy: ", spreadCopy);

//using array.slice() method: An older but reliable method for creating a shallow copy.
const sliceCopy = original.slice();
console.log("sliceCopy: ", sliceCopy);

//using array.from(): Useful for creating a copy from array-like objects or iterables.
const fromCopy = Array.from(original);
console.log("fromMethodCopy: ", fromCopy);

//using concat(): You can use concat() to copy the array into a new one.
const concatCopy = [].concat(original);
console.log("concatCopy: ", concatCopy);

// Using JSON.stringify() and JSON.parse(): This creates a deep copy but only
//works for JSON-safe data (no functions, undefined, or circular references).
const jsonCopy = JSON.parse(JSON.stringify(original));
console.log("JsonCopy: ", jsonCopy);

//using map: It’s useful when you need to transform elements while copying.
const mapCopy = original.map((item) => item);
console.log("mapCopy: ", mapCopy);

//using forLoop: A manual way to create a shallow copy.
const forLoopCopy = [];
for (let i = 0; i < original.length; i++) {
  forLoopCopy.push(original[i]);
}
console.log("forLoopCopy: ", forLoopCopy);

//using reduce(): A functional approach to copy the array.
const reduceCopy = original.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);
console.log("reduceCopy: ", reduceCopy);

//Using structuredClone() (modern browsers only): This method creates a deep
//copy, even handling circular references and complex data types.
const cloneCopy = structuredClone(original);
console.log("cloneCopy: ", cloneCopy);
