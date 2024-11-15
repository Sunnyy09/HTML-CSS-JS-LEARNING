function postData() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("output").innerText = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => {
      document.getElementById("output").innerText = `${error}`;
    });
}

document.getElementById("fetchBtn").addEventListener("click", postData);
