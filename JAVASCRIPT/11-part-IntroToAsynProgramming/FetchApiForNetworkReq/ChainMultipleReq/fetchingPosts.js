async function fetchPosts(postId) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    // console.log(posts);

    const comments = await fetchComments(postId);
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

async function fetchComments(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.log(error);
  }
}

fetchPosts(1);
