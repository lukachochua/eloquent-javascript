// Higher Order Functions

// Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce(function (newArray, existingArray) {
    return newArray.concat(existingArray);
}, []);

console.log(flattened);

// Your Own Loop