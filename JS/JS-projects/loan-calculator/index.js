const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;
  const months = document.getElementById("months").value;
  if (amount === "" || rate === "" || months === "")
    alert("Please enter valid input!");

  const totalPay = (amount * (rate / (100 * (12 / months)) + 1)) / months;
  if (!isNaN(totalPay) && totalPay < Number.MAX_VALUE)
    document.getElementById(
      "total"
    ).innerHTML = `Monthly Payment: $ ${totalPay.toFixed(2)}`;
  else document.getElementById("total").innerHTML = "Invalid input";
});
