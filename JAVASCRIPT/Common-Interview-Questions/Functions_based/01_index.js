function makeIce(size, money) {}

function makeCream(flavour, color, temp = 0, name) {}

console.log(makeIce.length);
console.log(makeCream.length);

/*
It will print:
2
2
.length property on function prints the length of arguments a function is expecting.
And if there is any optional argument, then all argument after that will be 
considered option, not matter if we declare them optional or not.
With that said, it is always a good practice to include optional arguments in 
the last.
*/
