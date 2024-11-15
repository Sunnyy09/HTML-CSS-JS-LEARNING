function fetchData(callBack) {
  setTimeout(() => {
    callBack({ name: "John", age: 25 });
  }, 1000);
}
fetchData((data) => console.log(data));
