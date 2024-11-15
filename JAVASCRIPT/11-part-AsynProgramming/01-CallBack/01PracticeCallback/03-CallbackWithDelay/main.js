function delayedGreeting(name, delay, displayMsg) {
  setTimeout(() => {
    const message = "Have a Good day " + name;
    displayMsg(message);
  }, delay);
}

// delayedGreeting("Joy", 2000, (msg) => console.log(msg));
delayedGreeting("Joy ", 2000, console.log);
