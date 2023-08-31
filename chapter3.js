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

function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }

    if (num < 0) {
        return isEven(-num);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean counting

function countBs(string) {
    let bCounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            bCounter++;
        }
    }
    return bCounter;
}


function countChar(string, char) {
    let charCounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            charCounter++;
        }
    }
    return charCounter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


