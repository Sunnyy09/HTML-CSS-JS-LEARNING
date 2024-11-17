function retry(operation, retries, callback) {
  function attempt(remainingRetries) {
    operation((error, result) => {
      if (error && remainingRetries > 0) {
        attempt(remainingRetries - 1);
      } else {
        callback(error, result);
      }
    });
  }
  attempt(retries);
}

retry(
  (cb) => cb("Failed", "Successfull Login"),
  3,
  (error, result) => {
    if (error) {
      console.log("Operation failed after retries:", error);
    } else {
      console.log("Success: ", result);
    }
  }
);
