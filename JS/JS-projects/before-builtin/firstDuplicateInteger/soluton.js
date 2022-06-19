// Your solution here

function firstDuplicateInteger(arr) {
  if (arr.length < 2) return console.log("not enough element");

  let num;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
}

let arr = [1, 2, 3, 4, 5, 5, 2, 1];

console.log(firstDuplicateInteger(arr));
