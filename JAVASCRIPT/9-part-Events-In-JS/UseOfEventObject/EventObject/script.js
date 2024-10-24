let btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = color;
  console.log(e);
}

btn.addEventListener("click", bgChange);
