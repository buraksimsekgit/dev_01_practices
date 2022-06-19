// Your solution here

function vowelsInString(str) {
  const vowels = "aeiouAEIOU";
  let counter = 0;

  for (const c of str.split("")) {
    if (vowels.indexOf(c) >= 0) counter++;
  }
  return counter;
}

console.log(vowelsInString("hello"));
console.log(vowelsInString("you are great!!"));
console.log(vowelsInString("why"));
