const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ name: "Hulk", age: 22 });
      } else {
        reject("User is not found.");
      }
    }, 2000);
  });
};

// using promise handlers
// function displayUserData() {
//   fetchUserData(1).then((data) => {
//     console.log(`data of user: Name - ${data.name}, Age - ${data.age}`);
//   });
// }
// displayUserData();

//let's do it using Async-await
async function displayUserData() {
  const userData = await fetchUserData(1);
  console.log(userData);
}
displayUserData();
