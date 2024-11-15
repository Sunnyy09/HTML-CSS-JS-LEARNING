function countDown(start, callBack) {
  const intervalId = setInterval(() => {
    callBack(start);
    if (start === 0) {
      clearInterval(intervalId);
      console.log("Done!");
    }
    start--;
  }, 1000);
}

countDown(5, console.log);
