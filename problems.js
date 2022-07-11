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

// console.log(mirrorArray([1,2,3]));
   // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd']));
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

  /*
abbreviate
Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
  */

const vowels = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(word) {
  if (word.length < 4) {return word;}

  let letters = word.split("");

  let noVowels = "";
  letters.forEach(
    letter => {
      if (!vowels.includes(letter)) {
      noVowels += letter;
      }
    }
  );

  return noVowels;
}

function abbreviate(sentence) {
  let words = sentence.split(" ");
  let removed = "";
  words.forEach(
    word => {
      removed += ` ${removeVowels(word)}`
    }
  );

  console.log(removed);
}

// abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'

/*
adults
Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

Example:

adults
Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
*/

function isAdult(person) {
  return person.age >= 18;
}

function adults(people) {
  let adults = [];
  people.forEach(
    person => {
      if (isAdult(person)) {
        adults.push(person.name);
      }
    }
  );
  return adults;
}

let ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

//console.log(adults(ppl)); // => [ 'John', 'Jane' ]

/*
countScores
Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.
*/

function countScores(people) {
  let scores = {};
  people.forEach(
    person => {
      if (scores[person.name]) {
        scores[person.name] += person.score;
      } else {
        scores[person.name] = person.score;
      }
    }
  );

  console.log(scores);
  return scores;
}

// Example 1:
var ppl1 = [
  { name: "Anthony", score: 10 },
  { name: "Fred", score : 10 },
  { name: "Anthony", score: -8 },
  { name: "Winnie", score: 12 }
];
//countScores(ppl1); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2
var peeps1 = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];

//countScores(peeps1); // => { Anthony: 4, Fred: 4, Winnie: 6 }

/*
firstNPrimes
Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

Examples:

firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]
*/

function isPrime(number) {
  let prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
    }
  }
  return prime;
}

//console.log(isPrime(4));

function firstNPrimes(n) {
  let primes = [];
  let current = 2;
  while (primes.length < n) {
    if (isPrime(current)) {primes.push(current);}
    current++;
  }

  console.log(primes);
  return  primes;
}

// firstNPrimes(0);  // => []
// firstNPrimes(1);  // => [2]
// firstNPrimes(4);  // => [2, 3, 5, 7]

/*
peakFinder
Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

Examples:

peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]
*/

function peakFinder(array) {
  //iterate over the array
   //compare the element to i-1 and i+1
   //if greater than both, push the index to result array
   //if i-1 or i+1 does not exist, use negative infinity

   let peaks = [];
   for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let previous = array[i-1] || Number.NEGATIVE_INFINITY;
    let next = array[i+1] || Number.NEGATIVE_INFINITY;
    if (current > previous && current > next) {
      peaks.push(i);
    }
   }

   console.log(peaks);
   return peaks;
}

// peakFinder([1, 2, 3, 2, 1]); // => [2]
// peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]

/*
divisibleByThreePairSum
Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

Examples:

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]

*/

function sumToMultipleofThree(num1, num2) {
  return (num1+num2) % 3 === 0
}

function divisibleByThreePairSum(array) {
 let pairs = [];
 for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (sumToMultipleofThree(array[i], array[j])) {
      pairs.push([i, j]);
    }
  }
 }
 console.log(pairs);
}

// divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
//arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// divisibleByThreePairSum([8, 3, 5, 9, 2]);
//arr2 // => [[1, 3]]

/*
zipArray
Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

Examples:

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
*/

function zipArray(a1, a2) {
  let a3 = a1.map(
    (element, index) => [element, a2[index]]
  );

  console.log(a3);
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];
// zipArray(a1, a2);


/*
twoDimensionalTotal
Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements.

*/

function sumArray(array) {
  return array.reduce(
    (total, element) => total + element
  );
}

function twoDimensionalTotal(array) {
  let total = array.reduce(
    (sum, subArray) => {
      return sum + subArray.reduce(
        (sum, element) => sum + element
      );
    }
  , 0
  );

  console.log(total);
}

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

//twoDimensionalTotal(arr1);  // => 40

const arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

//twoDimensionalTotal(arr2);  // => 15

/*
countInnerElement
Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

*/

function countInnerElement(arr) {
  let counts = {};
  arr.forEach(
    subArray => {
      subArray.forEach(
        element => {
          if (counts[element]) {
            counts[element]++;
          } else {
            counts[element] = 1;
          }
        }
      );
    }
  );

  console.log(counts);
}

const arr15 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7]
]

//countInnerElement(arr15)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr21 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

//countInnerElement(arr21)  // => {a: 4, b: 2, c: 2, d: 2}

/*
twoDiff
Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

NOTE: The pairs are unique. HINT: Account for negative difference too!

*/

function twoDiff(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(array[i] - array[j]) === 2) {
        result.push([i, j]);
      }
    }
  }
  console.log(result);
}

// twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
// twoDiff([])  // => []

/*
arrayDiff
Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

Note: Assume both arrays have unique elements.

*/

function arrayDiffFilter(a1, a2) {

  let start = new Date();

  let result = a1.filter(
    element => !a2.includes(element)
  );


  let end = new Date();
  console.log(end-start);
  console.log(result);
}

function arrayDiffObject(a1, a2) {

  let start = new Date();

  let uniques = [];

  let values = {};
  a2.forEach(
    element => values[element] = element
  );
  a1.forEach(
    element => {
      if (values[element] === undefined) {
      uniques.push(element);
      }
    }
  );
  let end = new Date();
  console.log(end - start);
  console.log(uniques);
}

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
for (let i = 50; i < 100000; i++) {
  array1.push(i);
  array2.push(i);
}
// arrayDiffObject(array1, array2)  // => [1, 2, 43 ,4]
// arrayDiffFilter(array1, array2)

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// arrayDiffFilter(array3, array4)  // => ['a', 'ab', 'c', 'c']
// arrayDiffObject(array3, array4)