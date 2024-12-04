const months = ["Jan", "March", "April", "June"];

// splice(Insert at, remove from, add value)

months.splice(0, 0);
console.log(months);

months.splice(2, 2);
console.log(months);

//Remove 0 (zero) elements before index 2, and insert "drum"
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum");
console.log(myFish);
