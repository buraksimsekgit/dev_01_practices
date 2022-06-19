// Your solution here

function isValidPassword(pw) {

  if(pw.length < 8)
  return false;

  let isCapital = false;
  let isLower = false;
  for (let i = 0; i < pw.length; i++) {
    if(pw.charAt(i) === pw.toUpperCase().charAt(i))
    isCapital = true;
    if(pw.charAt(i) === pw.toLowerCase().charAt(i))
    isLower = true;
  }
  return isCapital && isLower;
}


console.log(isValidPassword('RexTheDog'));
console.log(isValidPassword('rexthedog'));
console.log(isValidPassword('DogSSSSS'));
console.log(isValidPassword('AMERIKQU'));
