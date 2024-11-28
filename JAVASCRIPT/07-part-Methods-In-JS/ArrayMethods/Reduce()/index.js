const numbers = [1, 2, 3, 4, 5];

const output = numbers.reduce((sum, num) => (sum += num));
console.log(output);

//Using reduce() to find the maximum value in an array:
let num = [5, 20, 100, 60, 1];

const maxValue = num.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
}, 0);
console.log(maxValue);

//Using reduce() to merge different objects in a single object:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const objArray = [obj1, obj2, obj3];

const mergeObj = objArray.reduce((res, curr) => {
  return { ...res, ...curr };
});
console.log(mergeObj);

//Using reduce() to group objects in an array. For example, grouping products
// in a shopping cart according to their brand name.

const shoppingCart = [
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Xiomi", price: 2.99, quantity: 2 },
  { name: "Samsung", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 4.99, quantity: 4 },
  { name: "Nokia", price: 4.99, quantity: 4 },
];

const products = shoppingCart.reduce((productGroup, product) => {
  const name = product.name;

  if (productGroup[name] == null) {
    productGroup[name] = [];
  }
  productGroup[name].push(product);
  return productGroup;
}, {});

console.log(products);
