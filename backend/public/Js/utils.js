function getRandomColor() {
  const colors = [
    "red",
    "green",
    "blue",
    "pink",
    "yellow",
    "violet",
    "black",
    "white",
    "orange",
    "grey",
  ];
  const randomIndex = Math.random() * colors?.length;
  const randomColor = colors[Math.floor(randomIndex)];
  console.log({randomColor, randomIndex});
  const bg = document.getElementById("bg");
  bg.style.backgroundColor = randomColor;
}

const changeColorHanlder = document.getElementById("changeColor");

changeColorHanlder.addEventListener("click", getRandomColor);
