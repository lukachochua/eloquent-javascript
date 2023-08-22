// Chapter 4 exercises

// The sum of a range

function range(start, end, step = 1) {
    const numbers = [];

    if (step > 0) {
        for (let i = start; i <= end; i++) {
            numbers.push(i);
        }
    } else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            numbers.push(i);
        }
    }

    return numbers;
}

function sum(numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// Reversing an array

let newArray = [];


function reverseArray(array) {
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let index = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = index;
    }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


// List

function arrayToList(array) {
    let list;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];

    for (let i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

function prepend(element, list) {
    return { value: element, rest: list };
}

function nth(list, n) {
    if (!list) {
        return undefined;
    }

    let node = list;

    for (let i = 0; i < n; i++) {
        if (!node.rest) {
            return undefined;
        }

        node = node.rest;
    }

    return node.value;
}

function recursiveNth(list, n) {
    if (!list) {
        return undefined; 
    } else if (n === 0) {
        return list.value; 
    } else {
        return recursiveNth(list.rest, n - 1); 
    }
}



