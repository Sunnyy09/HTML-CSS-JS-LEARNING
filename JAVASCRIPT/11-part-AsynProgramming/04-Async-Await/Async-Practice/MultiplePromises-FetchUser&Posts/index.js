function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userDataBase = {
        1: { id: 1, name: "Alice" },
        2: { id: 2, name: "Joy" },
      };
      if (userDataBase[userId]) {
        resolve(userDataBase[userId]);
      } else {
        reject("User doesn't exist");
      }
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const postsDatabase = {
        1: [
          { postId: 101, content: "Post 1 by Alice" },
          { postId: 102, content: "Post 2 by Alice" },
        ],
        2: [{ postId: 201, content: "Post 1 by Bob" }],
      };
      if (postsDatabase[userId]) {
        resolve(postsDatabase[userId]);
      } else {
        reject("User has no posts");
      }
    }, 2000);
  });
}

// function displayUserAndPosts(userId) {
//   fetchUser(userId)
//     .then((user) => {
//       console.log(user.name);
//       return fetchPosts(user.id);
//     })
//     .then((posts) => {
//       console.log("User's Post's Data: ", posts);
//       //   posts.forEach((post) => {
//       //     console.log(post.content);
//       //   });
//     });
// }

//let's do it using async-await
async function displayUserAndPosts(userId) {
  const user = await fetchUser(userId);
  const posts = await fetchPosts(user.id);

  // Add posts to the user object
  user.posts = posts;

  console.log(user.name);
  console.log("User's Posts: ");
  user.posts.forEach((post) => {
    console.log(post);
  });
}

displayUserAndPosts(1);
displayUserAndPosts(2);
