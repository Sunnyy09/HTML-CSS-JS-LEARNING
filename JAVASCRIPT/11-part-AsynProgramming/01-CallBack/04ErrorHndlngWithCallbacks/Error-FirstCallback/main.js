function fetchUserdata(id, callBack) {
  setTimeout(() => {
    if (id < 0 || id === "") {
      callBack("Invalid User Id.", null);
    } else {
      callBack(null, { id: id, name: "John", age: 25 });
    }
  }, 1000);
}

fetchUserdata(-1, (error, data) => {
  if (error) console.log("Error: ", error);
  else console.log("Data: ", data);
});
