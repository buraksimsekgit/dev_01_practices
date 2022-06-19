let score = 0;
const holes = document.getElementsByClassName("hole");
const gameArea = document.getElementById("hit-a-mole");

gameArea.addEventListener("click", (clickEvent) => {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle("mole");
  if (clickEvent.target.matches(".mole")) {
    score++;
  }
  document.getElementById("score").innerHTML = score;
});
