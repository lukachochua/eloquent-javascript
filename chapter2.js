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


function createChessBoard(size) {
  let chessBoard = '';

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      if ((row + column) % 2 == 0) {
        chessBoard += " ";
      }
      else {
        chessBoard += "#";
      }
    }

    chessBoard += "\n";
  }

  return chessBoard;
}

let finalBoard = createChessBoard(8);
console.log(finalBoard);











