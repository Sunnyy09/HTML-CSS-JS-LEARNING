for (var i = 0; i < 10; i++) {
  //   console.log(i);
  setTimeout(() => {
    console.log(i);
    // When the setTimeout function runs, it uses the current value of i
    // at the time it is executed.
  }, 2000);
}
/* 
var has global scope, thats why here setTimeOut() func is executed
after completing the for loop, therefore it printed the 10 value 10 times.


Alternatively, you can use an Immediately Invoked Function Expression (IIFE) 
to create a new scope for each iteration when using var:


Using let Instead of var
The let keyword is block-scoped, meaning a new variable is created for each 
iteration of the loop

*/
