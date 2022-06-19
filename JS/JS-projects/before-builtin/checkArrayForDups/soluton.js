// Your solution here

function checkArrayForDups(arr){
    if(arr.length < 2)
    return false;

    else{
        for(let i = 0; i < arr.length; i++){

            for(let j = i+1; j < arr.length; j++){
                if(arr[i] === arr[j])
                return true;
            }
        }
    }
    return false;
}

let arr = [1,2,3,4,5, 1];

console.log(checkArrayForDups(arr))