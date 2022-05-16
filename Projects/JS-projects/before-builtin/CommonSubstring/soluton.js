// Your solution here

function commonSubstr(str1, str2){
    if(str1.length < 2 && str2.length < 2)
    return false;

    else{
        for(let i = 0; i < Math.max(str1.length, str2.length); i++){

            for(let j = 0; j < Math.max(str1.length, str2.length); j++){

                if(str1.charAt(i) === str2.charAt(j))
                return true;
            }
        }
    }
    return false;
}

console.log(commonSubstr("Hello", "World"))