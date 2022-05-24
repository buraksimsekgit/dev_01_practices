let button = document.getElementById("button");

let backgroundColors = ["red", "green", "blue", "yellow", "orange", "purple"];

button.addEventListener("click", () => {
  document.getElementById("main").style.background =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
});
