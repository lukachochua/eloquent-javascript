// Chapter 2 excercises

// 1. Looping a triangle

let symbol = '#';

for (let i = 0; i < 7; i++) {
  console.log(symbol);
  symbol += '#';
}


// 2. FizzBuzz

let number = 1;

for (let i = 0; i < 100; i++) {
  if (number % 3 == 0 && number % 5 != 0) {
    console.log("Fizz");
  }
  else if (number % 5 == 0 && number % 3 != 0) {
    console.log("Buzz");
  }
  else if (number % 5 == 0 && number % 3 == 0) {
    console.log("FizzBuzz");
  }
  else {
    console.log(number)
  }

  number++;
}


// 3. Chessboard


let chessboard = '';

for(let i = 0; i < 8; i++) {
  for(let e = 0; e < 8; e++) {
    if((e + i) % 2 == 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
	chessboard += "\n";
}

console.log(chessboard);











