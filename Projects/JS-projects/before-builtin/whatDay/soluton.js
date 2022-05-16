// Your solution here

function whatDay(num) {
  let day = num % 7;

  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
      default:
  }

  return day;
}

console.log(whatDay(1))
console.log(whatDay(5))
console.log(whatDay(8))
console.log(whatDay(21))
console.log(whatDay(431))
console.log(whatDay(1002))
