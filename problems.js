/*
logBetween
Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

Examples:

logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]

*/

function logBetween(lowNum, highNum) {
  let range = [];
  for (let i = lowNum; i <= highNum; i++) {
    range.push(i);
  }
  console.log(range);
}

// logBetween(5, 10);
// logBetween(-1, 2);
// logBetween(14, 6);
// logBetween(4, 6);

/*
logBetweenStepper
Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

Examples:

logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
*/

let logBetweenStepper = (min, max, step) => {
  let range = [];
  for (let i = min; i <= max; i+= step) {
    range.push(i);
  }
  console.log(range);
}

// logBetweenStepper(5, 9, 1);
// logBetweenStepper(-10, 15, 5);

/*
printReverse
Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

Examples:

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]
*/

function printReverse(min, max) {
  let range = [];
  for (let i = max - 1; i > min; i--) {
    range.push(i);
  }
  console.log(range);
}

// printReverse(13, 18);
// printReverse(90, 94);

/*
fizzBuzz
Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

Examples:

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
*/

let fizzBuzz = (max) => {

  if (max === 0) {return [];}

  let results = [];
  let by3 = max % 3 === 0;
  let by5 = max % 5 === 0;

  if (by3 !== by5) {
    results.push(max);
  }

  results = [...(fizzBuzz(max - 1)), ...results];
  return results;
}

//console.log(fizzBuzz(20));


/*
maxValue
Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

Examples:

maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43
*/

function maxValue(array) {
  if (array.length === 0) {return null;}
  // return Math.max(...array);

  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

// console.log(maxValue([12, 6, 43, 2]));
// console.log(maxValue([]));
// console.log(maxValue([-4, -10, 0.43]));

/*
myIndexOf
Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

CONSTRAINT: Do not use the indexOf or includes method

Examples:

myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1
*/

function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {return i;}
  }

  return -1;
}

// console.log(myIndexOf([1,2,3,4],4));
// console.log(myIndexOf([5,6,7,8],2));

/*
factorArray
Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

Examples:

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []
*/

function factorArray(array, number) {
  console.log(array.filter(
    element => (number % element === 0)
  ));
}

// factorArray([2,3,4,5,6],20) // => [2,4,5]
// factorArray([2,3,4,5,6],35) // => [5]
// factorArray([10,15,20,25],5) // => []

/*
oddRange
Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

Examples:

oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]
*/

function oddRange(end) {
  let range = [];
  for (let i = 0; i <=end; i++) {
    if (i % 2 === 1) {range.push(i);}
  }
  console.log(range);
}

// oddRange(13);
// oddRange(6);

/*
reverseHyphenString
Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

Examples:

reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"
*/

function reverseHyphenString(string) {
  console.log(
    string.split("-")
    .reverse()
    .join('-')
  );
}

// reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
// reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

/*
intersect
Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
*/

function arrayToObject(arr) {

  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!obj[element]) {
      obj[element] = true;
    }
   }
   return obj;
}

function intersect(arr1, arr2) {
 let intersection = [];
//  for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i])) {
//     intersection.push(arr1[i]);
//   }
//  }

 let obj1 = arrayToObject(arr1);
 let obj2 = arrayToObject(arr2);

 for (let key in obj1) {
  if (obj2[key]) {
    intersection.push(key);
  }
 }

 console.log(intersection);
}

// intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
// intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []

/*
mirrorArray
Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
*/

function mirrorArray(array) {
   //return [...array, ...(array.reverse())];
  let mirrored = [];
  for (let i = array.length - 1; i >= 0; i--) {
    mirrored.push(array[i]);
    mirrored.unshift(array[i]);
  }
  return mirrored;
}

console.log(mirrorArray([1,2,3]));
  // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
