function deepMerge(...objects) {
  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      const accValue = acc[key];
      const objValue = obj[key];

      // Check if both values are objects and not functions
      if (
        typeof accValue === "object" &&
        accValue !== null &&
        typeof objValue === "object" &&
        objValue !== null &&
        !Array.isArray(accValue) &&
        !Array.isArray(objValue)
      ) {
        acc[key] = deepMerge(accValue, objValue); // Recursively merge nested objects
      } else {
        acc[key] = objValue; // Directly assign functions or other values
      }
    });
    return acc;
  }, {});
}

// Example objects with nested objects and functions
const obj1 = {
  a: 1,
  b: { x: 10, y: 20 },
  greet: function () {
    return "Hello from obj1";
  },
};
const obj2 = {
  b: { y: 30, z: 40 },
  c: 3,
  greet: function () {
    return "Hello from obj2";
  },
};
const obj3 = { d: 4, e: 5 };

const mergedObj = deepMerge(obj1, obj2, obj3);
console.log(mergedObj);

// Testing the merged result
console.log(mergedObj.greet()); // "Hello from obj2" (from the last merged object with a greet method)
console.log(mergedObj.b); // { x: 10, y: 30, z: 40 }
console.log(mergedObj); // { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3, d: 4, e: 5, greet: [Function: greet] }
