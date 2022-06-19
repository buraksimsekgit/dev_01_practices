const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
  ];
  const carNames = [
    'Mercedes AMG',
    'Mercedes E Class',
    'BMW',
    'AUDI',
    'Dodge Challenger',
  ];

const rButton = document.getElementById("icon-right");
const lButton = document.getElementById("icon-left");
const pButton = document.getElementById("playBtn");
const sButton = document.getElementById("stopBtn");
const carName = document.getElementsByClassName("car-name");

rButton.addEventListener("click", () => {
    slideImages();
})

lButton.addEventListener("click", () => {
    slideImages(false);
})

let autoPlayInterval;
pButton.addEventListener("click", () => {
    autoPlayInterval = setInterval(slideImages, 1000);
})


sButton.addEventListener("click", () => {
    clearInterval(autoPlayInterval);
});

let index = 0;
function slideImages(forward = true) {
    document.getElementsByClassName("img-container")[0].style.background = `url(./img/contBcg-${index}.jpeg) center/cover`;
    carName.innerHTML = carNames[index];
    if (forward) {
        index++;
        if (index > carNames.length-1) 
        index = 0;      
    } else {
        index--;
    }
}

