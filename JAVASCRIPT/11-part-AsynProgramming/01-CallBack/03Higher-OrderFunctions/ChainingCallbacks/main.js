function getUser(callBack) {
  setTimeout(() => {
    callBack({ id: 1, name: "John" });
  }, 1000);
}

function getPosts(userId, callBack) {
  setTimeout(() => {
    callBack([
      { id: 1, title: "Post1" },
      { id: 2, title: "Post2" },
    ]);
  }, 1000);
}

// function displayPosts(posts) {
//   console.log(posts);
// }

// getUser((user) => getPosts(user.id, displayPosts));

getUser((user) => getPosts(user.id, (data) => console.log(data)));
