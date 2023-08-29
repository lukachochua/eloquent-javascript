// Higher Order Functions

// Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce(function (newArray, existingArray) {
    return newArray.concat(existingArray);
}, []);

console.log(flattened);

// Your Own Loop

function loop(value, testFn, updateFn, bodyFn) {
    for(let i = value; testFn(value); value = updateFn(value)) {
      bodyFn(value);
    }
  }
  
loop(3, n => n > 0, n => n - 1, console.log);
