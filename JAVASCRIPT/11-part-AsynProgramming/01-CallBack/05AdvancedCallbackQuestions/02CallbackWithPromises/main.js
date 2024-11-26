function performOperation(callback) {
  return new Promise((resolve, reject) => {
    try {
      const result = callback({ id: 1, name: "John", age: 25 });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

performOperation((data) => console.log(data))
  .then(() => console.log("operation Successful"))
  .catch((error) => console.log(error));
