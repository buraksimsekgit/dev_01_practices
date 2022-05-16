// Your solution here

function toSingleWord(str){

  let empty = "";
  for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) !== " ")
    empty += str.charAt(i);

  }
  return empty.toLowerCase();
}


//single-line regex solution
function toSingleWord2(str){

  return str.replaceAll(" ", "").toLowerCase();

}

console.log(toSingleWord2("Tg School"))
console.log(toSingleWord2("favorite tree ever"))
console.log(toSingleWord2("one word"))

console.log(toSingleWord("Tg School"))
console.log(toSingleWord("favorite tree ever"))
console.log(toSingleWord("one word"))