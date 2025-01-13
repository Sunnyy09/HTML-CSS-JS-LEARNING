const array = [1, 1, [1, 1, 2, [1, 2, [4, 5]]]];

/*
const emptyArray = [];
const sol = array.toString(); // this is not acceptable by interviewer
*/

// do it with recurios
function flat(arr, level) {
  const result = [];

  arr.forEach((val) => {
    if (Array.isArray(val) && level > 0) {
      result.push(...flat(val, level - 1));
    } else {
      result.push(val);
    }
  });
  return result;
}
// console.log(flat(array, 3));

// By using ARRAY method
console.log(array.flat(3));
