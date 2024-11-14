function sayHello(msg) {
  console.log(msg);
}

function greet(name, callBack) {
  const message = "Hello " + name;
  callBack(message);
}
greet("Sunny", sayHello);

function greet2(name, callback) {
  callback("Hello, " + name);
}

greet2("John", console.log);

function greet3(name, callback) {
  const message = "Hello, " + name;
  callback(message);
}

greet3("Maxi", (msg) => console.log(msg));
//In this version, we use an anonymous arrow function (msg) => console.log(msg)
// as the callback. This approach gives more flexibility, as you can add
//additional logic if needed.

function greet4(displayData) {
  const msgObj = {
    name: "Jordan",
    age: 22,
    Adress: "USA, California",
  };
  displayData(msgObj);
}

greet4((data) => console.log(data));
