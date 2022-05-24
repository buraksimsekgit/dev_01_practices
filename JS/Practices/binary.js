

function binaryGap(num){

let arr = num.toString(2).split("1");

let max = -Infinity;

for (let i = 1; i < arr.length-1; i++) {
    if(arr[i].length > max)
    max = arr[i].length
}
return max;
}

console.log(binaryGap(529));




function removeDups(arr){

let uniqueOnes = []

arr.forEach(element => {
    if(!uniqueOnes.includes(element))
    uniqueOnes.push(element)
});

return uniqueOnes;

}

let arr2 = [1, 2, 2, 3, 4];

console.log(removeDups(arr2));


function isPangram(str){

    let strLow = str.toLowerCase();
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < letters.length; i++) {
      if(strLow.indexOf(letters[i]) < 0){
        return false;
      }
    }
    return true;
  }
  
  console.log(isPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
  console.log(isPangram("Five hexing wizard bots jump quickly"));
  console.log(isPangram("JavaScript is the best"));


  function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowercase = s.toLowerCase().replace(/[^a-z]/g, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }