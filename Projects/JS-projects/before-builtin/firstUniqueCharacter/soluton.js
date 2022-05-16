// Your solution here

function findFirstUniqueChar(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
}

console.log(
  findFirstUniqueChar("the quick brown fox jumps over the calm kitten quietly")
);
