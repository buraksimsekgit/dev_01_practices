// Your solution here

function sleepIn(weekday, vacation){

  return !weekday || vacation;
  
}


console.log(sleepIn(true, false))
console.log(sleepIn(false, false))
console.log(sleepIn(true, true))
console.log(sleepIn(false, true))


