var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123; // special type of string: "object" "Object"
a[c] = 456;

console.log(a[b]);
