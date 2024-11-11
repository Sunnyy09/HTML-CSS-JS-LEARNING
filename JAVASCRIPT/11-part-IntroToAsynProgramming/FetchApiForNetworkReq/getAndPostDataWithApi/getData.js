const fetchBtn = document.querySelector("button");
const output = document.querySelector("ul");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

    const data = await response.json();

    // const stringData = JSON.stringify(data);

    output.innerHTML = " ";

    const posts = data.map((post) => {
      const li = document.createElement("li");
      li.innerText = `${post.title} : ${post.body}`;
      return li;
    });
    posts.forEach((item) => {
      document.getElementById("output").appendChild(item);
    });
  } catch (error) {
    output.innerText = "Failed to fetch data";
  }
}

fetchBtn.addEventListener("click", fetchData);
