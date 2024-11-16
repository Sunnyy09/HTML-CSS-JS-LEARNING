function readFile(filename, callBack) {
  setTimeout(() => {
    if (filename.endsWith(".txt")) {
      callBack(null, `File contents of ${filename}`);
    } else {
      callBack("Invalid file format", null);
    }
  }, 1000);
}

readFile("hello.txt", (error, data) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Data: ", data);
  }
});

readFile("hello.doc", (error, data) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Data: ", data);
  }
});
