const displayList = document.getElementById("output");

const people = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];

people.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  li.style.color = "purple";
  displayList.appendChild(li);
});
