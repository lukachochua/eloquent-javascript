// Higher Order Functions

// Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce(function (newArray, existingArray) {
    return newArray.concat(existingArray);
}, []);

console.log(flattened);

// Your Own Loop

function loop(value, testFn, updateFn, bodyFn) {
    for (let i = value; testFn(value); value = updateFn(value)) {
        bodyFn(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);


// Everythingg

function every(array, test) {
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

function every(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], function (n) { return n < 10; }));
  // → true