// Your solution here

function maxIntArray(arr) {
  let max = -Infinity;

  arr.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}

let arr = [1, 3, 5, 2, 12, 9];
console.log(maxIntArray(arr));
