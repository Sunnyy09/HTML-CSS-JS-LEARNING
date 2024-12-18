# JavaScript Interview Practice

This document contains various JavaScript examples and explanations to help with interview preparation.

---

## 1. **Functions as Objects and Property Assignment**

In JavaScript, functions are objects, and you can add properties to them.

```javascript
function abc() {
  console.log(abc.xyz);
}

abc(); // undefined

abc.xyz = `Hello World`;
abc.xyz = `Hello javascript`;

abc(); // "Hello javascript"
```

### Explanation:

1. Functions are first-class objects in JavaScript, meaning you can attach properties to them, just like any other object.
2. If you try to access a property that does not exist on the function, JavaScript will return undefined.

## 2. **Sparse Arrays Example**

In JavaScript, arrays are essentially objects with indexed keys. When you assign a value to an index larger than the array's length, it creates a sparse array where the missing indexes are set to `undefined`.

### Example:

```javascript
const numbers = [1, 2, 3, 4];
numbers[100] = 500;

console.log(numbers); // Logs array with index 100 set to 500, others are undefined
```

### Explanation:

1. JavaScript arrays are objects with indexed keys.
2. When you assign a value to an index larger than the array's length (e.g., numbers[100] = 500), it creates sparse arrays with undefined for the missing indexes.

## Understanding `typeof` in JavaScript

In JavaScript, the `typeof` operator is used to determine the type of a given value or variable. It returns a string that represents the type of the operand. The possible types returned by `typeof` include:

- `"number"`
- `"string"`
- `"boolean"`
- `"undefined"`
- `"object"`
- `"function"`
- `"symbol"`
- `"bigint"`

While `typeof` is simple to use, there can be some nuances, especially when chaining multiple `typeof` operators. Let's explore one such case and understand how it works.

### Example: `typeof typeof 100`

Let's examine the following code snippet:

```javascript
console.log(typeof typeof 100); // "string"
```

// First typeof: evaluates the type of 100, which is a number
typeof 100 // "number"

// Second typeof: evaluates the type of the string "number", which is a string
typeof "number" // "string"

## Spread Operator with Strings in JavaScript

The **spread operator** (`...`) is a powerful feature in JavaScript that allows you to "spread" or unpack elements from an iterable (like arrays, strings, or other iterable objects) into individual elements. When used with strings, the spread operator can split a string into an array of individual characters.

### Example: Using the Spread Operator with a String

```javascript
const array = [..."hello"];

console.log(array); // ["h", "e", "l", "l", "o"]
```

> "The spread operator (`...`) can be used to split a string into an array of characters."

## Using `parseInt()` in JavaScript

The `parseInt()` function in JavaScript is used to parse a string and convert it into an integer. It processes the string from left to right and stops parsing once it encounters a non-numeric character. If the string starts with non-numeric characters, `parseInt()` will return `NaN` (Not-a-Number).

### Example: Using `parseInt()` with Different Strings

```javascript
console.log(parseInt("8")); // 8

console.log(parseInt("10 + 2")); // 10
console.log(parseInt("7FM")); // 7
console.log(parseInt("M7F")); // NaN
```

### Why is this Useful?

The parseInt() function is useful for extracting numerical values from strings that may contain non-numeric characters. It allows you to work with mixed-content strings and still retrieve the integer value before any non-numeric parts. If the string starts with non-numeric characters, parseInt() gracefully returns NaN, which you can handle with further checks.

## Mapping and Returning `undefined` in JavaScript

The `map()` function in JavaScript creates a new array by applying a function to each element of an existing array. However, if the function inside `map()` returns `undefined`, those positions in the resulting array will have `undefined` as their values.

In this guide, we will explore how returning `undefined` inside the `map()` function can affect the resulting array.

### Example: Using `map()` and Returning `undefined`

```javascript
console.log(
  [1, 2, 3].map((val) => {
    if (val > 0) return;
    return val * 2;
  })
);
```

### Explanation:

1. map() is iterating over the array, but since return is used inside the if (val > 0) condition without a value, undefined is returned for each number greater than 0.
2. The result is an array where the non-undefined returns are replaced by undefined.

## Return Value from a Function in JavaScript

In JavaScript, if a function does not explicitly return a value using the `return` statement, it will automatically return `undefined` by default. This behavior is important to understand, especially when working with functions that may or may not have a return value.

### Example: Function Without a Return Value

```javascript
function ab() {
  return;
}

console.log(ab()); // undefined
```

> "If a function does not explicitly return a value, it returns undefined by default.  
> In this example, ab() returns undefined because there is no value specified in the return statement."

## Function Hoisting and Block Scoping in JavaScript

In JavaScript, **function hoisting** is a behavior where function declarations are moved (or "hoisted") to the top of their scope during the compilation phase, before the code is executed. This means you can call a function before it's defined in the code.

However, when functions are declared inside blocks (like `{}`), the behavior might seem confusing because of **block scoping** in JavaScript. Let’s explore how function hoisting works in relation to block scoping.

### Example: Function Hoisting and Block Scoping

```javascript
{
  function aa() {
    console.log("John");
  }
}

aa(); // "John"
```

> "Even if the function is inside a block, it will still be hoisted and callable after the block."

> "Function Hoisting: JavaScript hoists function declarations to the top of their scope. This means that even if a function is declared inside a block (like `{}`), it can still be called outside the block.  
> The `aa()` function is hoisted and available after the block, so it prints 'John' when called."

## Using `let` or `const` for Functions Inside Blocks in JavaScript

In JavaScript, when you declare a function using `let` or `const` inside a block, the function becomes **block-scoped**. This means the function will only be accessible within that block, and attempting to call it outside the block will result in a `ReferenceError`.

In this guide, we will explore how `let` and `const` affect the scope of functions declared inside blocks.

### Example: Function Inside a Block Using `const`

```javascript
{
  const a = () => {
    console.log("John");
  };
}

a(); // ReferenceError: a is not defined
```

> "If you declare a function using `const` or `let` inside a block, it is block-scoped. It will not be accessible outside the block.
> In this case, calling `a()` outside the block results in a `ReferenceError` because the function `a` is scoped only inside the block."
