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


// Everything

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

// Dominant Writing Direction

function dominantDirection(text) {
    function characterScript(code) {
      for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
          return script;
        }
      }
      return null;
    }
  
    function countBy(items, groupName) {
      let counts = [];
      for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
          counts.push({ name, count: 1 });
        } else {
          counts[known].count++;
        }
      }
      return counts;
    }
  
    function dominantDirectionFromCounts(counts) {
      let dominant = counts.reduce((a, b) => (a.count > b.count ? a : b));
      return dominant.name;
    }
  
    let scriptCounts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : 'none';
    }).filter(({ name }) => name !== 'none');
  
    return dominantDirectionFromCounts(scriptCounts);
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl