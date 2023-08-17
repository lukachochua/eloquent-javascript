// Chapter 3 exercises 


// Minumum


function min(numOne, numTwo) {
    if (numOne < numTwo) {
        return numOne;
    }
    else if (numTwo < numOne) {
        return numTwo;
    }
}

console.log(min(10, 0));

console.log(min(-10, 0));

// Recursion

function isEven(number) {
    if (number === 0) {
        return true;
    }
    else if (number === 1) {
        return false;
    }
    else if (number < 0) {
        return isEven(-number);
    }
    else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean counting

let countBs = function (string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            counter++;
        }
    }

    return counter;
}

let countChar = function (string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }

    return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
