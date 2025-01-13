let num = 20;
console.log(num + "20");
console.log(++num);

// this "++" works like
function plusplus(num) {
  let n = Number(num);
  n = n + 1;
  return n;
}
// console.log(plusplus(2));
