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

