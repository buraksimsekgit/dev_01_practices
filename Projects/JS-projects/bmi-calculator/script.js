const calculator = document.getElementById("btn");

calculator.addEventListener("click", () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = weight / ((height * height) / 10000);
  if (isNaN(bmi)) {
    document.getElementById("results").innerHTML = "Please enter number";
  } else {
    document.getElementById("results").innerHTML = bmi;
  }
});
