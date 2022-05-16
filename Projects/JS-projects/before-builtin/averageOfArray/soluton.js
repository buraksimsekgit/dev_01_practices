// Your solution here

function averageOfArray(){
    let len = arguments.length;
    let sum = 0;

    for(let i=0; i < len; i++) {
        sum += arguments[i];
    }
    return sum / len;
}

// with reduce

let arr = [ 1.5, 3, 2.5, 1 ];

let avgOfArray = arr.reduce((acc, num) => acc + num, 0) / arr.length;

console.log(avgOfArray);


