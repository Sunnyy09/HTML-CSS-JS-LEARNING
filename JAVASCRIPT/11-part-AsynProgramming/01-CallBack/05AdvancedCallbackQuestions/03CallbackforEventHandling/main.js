function addClickListener(callback) {
  setTimeout(() => {
    callback();
  }, 1000); // Simulating an event after 1 second
}

addClickListener(() => console.log("Button clicked"));
