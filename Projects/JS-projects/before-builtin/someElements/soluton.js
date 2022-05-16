// Your solution here

function someElements(arr, param) {
  let flag = false;
  arr.forEach((element) => {
    if (param(element) === true) flag = true;
  });
  return flag;
}

console.log(
  someElements([1, 2, 3], function (element) {
    return element === 2;
  })
);
console.log(
  someElements([1, 5, 3], function (element) {
    return element === 2;
  })
);
console.log(
  someElements([1, 2, 3], function (element) {
    return element % 2 === 0;
  })
);
console.log(
  someElements([1, 5, 3], function (element) {
    return element % 2 === 0;
  })
);


// NOT SURE ABOUT THIS ONE 