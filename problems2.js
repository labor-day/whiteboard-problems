/*

valueCounter
Write a function valueCounter(obj, val) that takes in an object and a value, the function should return the number of times val repeats as a value in obj.

Examples:

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2

*/

function valueCounter(obj, val) {
  let count = 0;
  for (let key in obj) {
    if (obj[key] === val) {
      count++;
    }
  }
  console.log(count);
}

// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// valueCounter(obj1, 'Anne')  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// valueCounter(obj2, 88)  // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// valueCounter(pairs, 'Roman')  // => 2

/*
elementCount
Write a function elementCount(array) that returns a object.
Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

Example:

elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

*/

function elementCount(array) {

  let counts = {};
  array.forEach(
    element => {
      if (counts[element]) {counts[element]++;}
      else {counts[element] = 1;}
    }
  );

  console.log(counts);
}

//elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
//elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

/*
nextTwoPrimes
Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

Examples:

nextTwoPrimes(2);  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]
*/

function isPrime(num) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {prime = false;}
  }
  return prime;
}

function nextTwoPrimes(num) {
  let primes = [];
  let possiblePrime = num + 1;
  while (primes.length < 2) {
    if (isPrime(possiblePrime)) {primes.push(possiblePrime);}
    possiblePrime++;
  }
  console.log(primes);
}

// nextTwoPrimes(2);  // => [ 3, 5 ]
// nextTwoPrimes(3);  // => [ 5, 7 ]
// nextTwoPrimes(7);  // => [ 11, 13 ]
// nextTwoPrimes(8);  // => [ 11, 13 ]
// nextTwoPrimes(20);  // => [ 23, 29 ]
// nextTwoPrimes(97);  // => [ 101, 103 ]

/*
pairProduct
Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num.
It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

CONSTRAINT: Use only while loops. No for loops.

Examples:

pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]
*/

function pairProduct(arr, num) {
  let pairs = [];

  let i = 0;
  while (i < arr.length - 1) {

    let j = i + 1;
    while (j < arr.length) {

      if (arr[i]* arr[j] === num) {
        pairs.push([i, j]);
      }
      j++;
    }
    i++;
  }

  console.log(pairs);
}

// pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
// pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

/*
twoDimensionalSize
Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

Examples:

const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
twoDimensionalSize(arr1);  // => 9

const arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
twoDimensionalSize(arr2);  // => 5
*/

function twoDimensionalSize(array) {
    let result =
    array.reduce((count, subArray) => count + subArray.length, 0);
    console.log(result);
}

// const arr100 = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8, 9]
// ];
// twoDimensionalSize(arr100);  // => 9

// const arr200 = [
//   ['a'],
//   ['b', 'c', 'd', 'e']
// ];
// twoDimensionalSize(arr200);  // => 5

/*
longWordCount
Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

Examples:

longWordCount("");  // => 0
longWordCount("short words only");  // => 0
longWordCount("one reallylong word");  // => 1
longWordCount("two reallylong words inthisstring");  // => 2
longWordCount("allwordword longwordword wordswordword");  // => 3
longWordCount("seventy schfifty five");  // => 1
*/

function longWordCount(string) {
  let words = string.split(" ");
  console.log(
    words.reduce(
    (count, word) => {
      if (word.length > 7) {return count + 1;}
      else {return count;}
    }, 0
  )
  );
}

// longWordCount("");  // => 0
// longWordCount("short words only");  // => 0
// longWordCount("one reallylong word");  // => 1
// longWordCount("two reallylong words inthisstring");  // => 2
// longWordCount("allwordword longwordword wordswordword");  // => 3
// longWordCount("seventy schfifty five");  // => 1

/*
factorial
Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

Examples:

factorial(1);  // => 1
factorial(4);  // => 24
factorial(5);  // => 120
factorial(10);  // => 3628800
*/

function factorial(n) {
  if (n === 1) {return 1;}
  return n * factorial(n-1);
}

//console.log(factorial(10));  // => 1
// factorial(4);  // => 24
// factorial(5);  // => 120
// factorial(10);  // => 3628800

/*
lcm
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

Examples:

lcm(2, 3);  // => 6
lcm(6, 10);  // => 30
lcm(24, 26);  // => 312
*/

function lcm(num1, num2) {
  //iterate from 1 to num1*num2
  //check if both leave no remainder when dividing i by num1 & num2
  //if so, we have our value!
  //otherwise, we iterate all the way to num1*num2, which must be the answer

  for (let i = 1; i <= num1*num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log(i);
      return i;
    }
  }
}

// lcm(2, 3);  // => 6
// lcm(6, 10);  // => 30
// lcm(24, 26);  // => 312

/*
hipsterfyWord
Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') // => 'propr'
hipsterfyWord('tonic') // => 'tonc'
hipsterfyWord('PANTHER') // => 'PANTHR'
hipsterfyWord('BACKWARDS') // => 'BACKWRDS'
*/

function hipsterfyWord(word) {
  const vowels = "AEIOUaeiou";
  let hipster = "";

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      hipster = word.slice(0, i) + word.slice(i+1);
      break;
    }
  }
  return hipster;
}

// hipsterfyWord('proper') // => 'propr'
// hipsterfyWord('tonic') // => 'tonc'
// hipsterfyWord('PANTHER') // => 'PANTHR'
// hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

/*
hipsterfy
Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper");  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
hipsterfy("towel flicker banana");  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"
*/

function hipsterfy(sentence) {
  let words = sentence.split(" ");
  words = words.map(word => hipsterfyWord(word));
  console.log(words.join(" "));
}

// hipsterfy("proper");  // => "propr"
// hipsterfy("proper tonic panther");  // => "propr tonc panthr"
// hipsterfy("towel flicker banana");  // => "towl flickr banan"
// hipsterfy("runner anaconda");  // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

/*
objectToString
Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

Examples:

objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
*/

function objectToString(count) {

  let repeatedLetters = [];

  for (letter in count) {
    let repeated = new Array(count[letter]);
    repeated.fill(letter);
    repeated = repeated.join("");
    repeatedLetters.push(repeated);
  }

  console.log(repeatedLetters.join(""));
}

// objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
// objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

/*
shortestWord
Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') // => 'is'
shortestWord('programming bootcamp') // => 'bootcamp'
*/

function shortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length < shortest.length) {
      shortest = currentWord;
    }
  }

  console.log(shortest);
}

// shortestWord('app academy is cool') // => 'is'
// shortestWord('programming bootcamp') // => 'bootcamp'

/*
greatestCommonFactor
Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

Examples:

greatestCommonFactor(15, 25) // => 5
greatestCommonFactor(16, 24) // => 8
greatestCommonFactor(7, 11) // => 1
*/

function greatestCommonFactor(num1, num2) {
  for (let i = Math.min(num1, num2); i > 0; i--){
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

// console.log(
// greatestCommonFactor(15, 25), // => 5
// greatestCommonFactor(16, 24), // => 8
// greatestCommonFactor(7, 11) // => 1
// );

/*
isPassing
Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

Examples:

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

isPassing(assessments1) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

isPassing(assessments2) // => false
*/

function isPassing(assessments) {

// let total = assessments.reduce(
//   (sum, assessment) => sum + assessment.score, 0
// );

// console.log(total/assessments.length >= 70);

let average = assessments.reduce(
  (sum, assessment, index, array) => {
    if (index === array.length - 1) {
      sum = sum + assessment.score;
      return sum / array.length >= 70;
    } else {
      sum = sum + assessment.score;
      return sum;
    }
  }, 0
);

console.log(average);
}

// const assessments1 = [
//   { number: 1, score: 60 },
//   { number: 2, score: 90 },
//   { number: 3, score: 80 },
//   { number: 4, score: 100 },
//   { number: 5, score: 85 }
// ];

// isPassing(assessments1) // => true
// const assessments2 = [
//   { number: 1, score: 60 },
//   { number: 2, score: 20 },
//   { number: 3, score: 45 }
// ];

//  isPassing(assessments2) // => false
/*
valueConcat
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with it's corresponding value from the object.

Examples:

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]
*/

let valueConcat = (array, obj) => {
  //iterate over the array (can use map)
    //if the current array element exists as a key in the object
      //change current element to be itself plus the value at that key in the object

  //return the array

  return array.map(
    element => {
      if (obj[element]) {
        return element + obj[element];
      } else {
        return element;
      }
    }
  );
}

const arr5 = ['alex', 'maurice', 'meagan', 'ali'];
const obj5 = { alex: 'bronca', ali: 'harris' }
// console.log(valueConcat(arr5, obj5)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ]

/*
threeInARow
Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
*/

function threeInARow(arr) {
  for (let i = 0; i < arr.length - 3; i++) {
    let first = arr[i];
    let second = arr[i+1];
    let third = arr[i+2];

    if (first === second && first === third) {
      return true;
    }
  }
  return false;
}

// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));// => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

/*
variableNameify
Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'
*/

function titleCase(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function variableNameify(words) {

  //iterate over words array
    //first word is all lowercase
    //remaining words are Proper Case
    //combine them all into 1 string with no spaces

  return words.reduce(
    (string, word, index) => {
      if (index === 0) {
        string += word.toLowerCase();
        return string;
      } else {
        string += titleCase(word);
        return string;
      }
    }, ""
  );

}

// console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
// console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
// console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

/*
threeIncreasing
Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order.
The function should return false otherwise.
Note that the 3 consecutive numbers should be increasing by 1,
so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false
*/

function threeIncreasing(arr) {

  for (let i = 0; i < arr.length - 3; i++) {
    let first = arr[i];
    let second = arr[i+1];
    let third = arr[i+2];

    if (first + 1 === second && second + 1 === third) {
      console.log(true);
      return true;
    }
  }

  console.log(false);
  return false;

}

// threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
// threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false


/*
reverse2D
Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

Examples:

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

*/

function reverse2D(array) {

  return array.reduceRight(
    (collector, subArray) => {
      return collector + subArray.reduceRight(
        (subCollector, element) => {
          return subCollector + element
        }, ""
      )
    }, ""
  );
}

// const arr15 = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f'],
//   ['g', 'h', 'i']
// ];

// console.log(reverse2D(arr15)); // => 'ihgfedcba'
// const arr25 = [
//   ['Julian', 'Matt', 'Mike'],
//   ['Oscar', 'Patrick']
// ];
// console.log(reverse2D(arr25)) // => 'PatrickOscarMikeMattJulian'

/*
reverb
Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

Examples:

reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'
*/

function reverb(word) {
  let vowels = "aeiou";
  for (let i = word.length; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }

  return word;
}

// console.log(
// reverb('running'),  // => 'runninging'
// reverb('wild'),  // => 'wildild'
// reverb('debugged'),  // => 'debuggeded'
// reverb('my')  // => 'my'
// );

/*
countRepeats
Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

Examples:

countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
countRepeats('hellobootcampprep'); // => 4

*/

function countRepeats(string) {
  let counts = {};
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (counts[string[i]] === 1) {
      count++;
      counts[string[i]]++;
    }
    else if (counts[string[i]]) {counts[string[i]]++;}
    else {counts[string[i]] = 1;}
  }

  console.log(count);
}

// countRepeats('calvin'); // => 0
// countRepeats('caaaalvin'); // => 1
// countRepeats('pops'); // => 1
// countRepeats('mississippi'); // => 3
// countRepeats('hellobootcampprep'); // => 4

/*
pairsToString
Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

Examples:

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
pairsToString(array1);  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
pairsToString(array2);  // => 'food!'
*/

function multiplier(arr) {
  let repeating = "";
  for (let i = 1; i <= arr[1]; i++) {
    repeating += arr[0];
  }
  return repeating;
}

//console.log(multiplier(['a', 3]));

function pairsToString(arr) {

  return arr.reduce(
    (string, pair) => {
      string = string + multiplier(pair);
      return string;
    }, ""
  );
}

// const array1 = [
//   ['a', 3],
//   ['b', 1],
//   ['c', 2]
// ];
// console.log(pairsToString(array1));  // => 'aaabcc'

// const array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
// console.log(pairsToString(array2));  // => 'food!'

/*
countAdjacentSums
Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) // => 2
countAdjacentSums([7, 2, 4, 6], 7) // => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
*/

function countAdjacentSums(arr, n) {
  let count = 0;

  for (let i = 1; i < arr.length - 1; i += 2) {
    let previous = arr[i-1];
    let current = arr[i];
    let next = arr[i+1];

    if (previous + current === n) {count++;}
    if (current + next === n) {count++;}
  }
  console.log(count);
  return count;
}

// countAdjacentSums([1, 5, 1], 6) // => 2
// countAdjacentSums([7, 2, 4, 6], 7) // => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3

/*
signFlipCount
Write a function signFlipCount(nums) that takes in an array of numbers as arguments.
The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa.
The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3
*/

function flipped(first, second) {

if (first === 0 || second === 0) {return false;}

if (first > 0 && second < 0) {return true;}
if (first < 0 && second > 0) {return true;}

return false;

}

function signFlipCount(nums) {

  let count = 0;

  //iterate over the array
    //compare the current number to the number at index+1
    //if different signs, increment count

  for (let i = 0; i < nums.length - 1; i++) {
    let current = nums[i];
    let next = nums[i+1];

    if (flipped(current, next)) {count++;}
  }
  console.log(count);

}

// signFlipCount([5, 6, 10, 3]); // => 0
// signFlipCount([-12, 0, -3, -5]); // => 0
// signFlipCount([-12, 10, -3, -5]); // => 2
// signFlipCount([1, -2, -3, -4]); // => 1
// signFlipCount([-1, 11.3, -3, 100]); // => 3

/*
powerSequence
Write a function powerSequence(base, length) that takes in two numbers, base and length.
The function should return an array containing a power sequence with the given length.
Assume that the length is at least 1.

The first number of a power sequence begins with base.
The second number of the sequence is the product between the first number and the base.
The third number of the sequence is the product between the second number and the base...

Examples:

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]
*/

function powerSequence(base, length) {

  // if (length === 1) {return [base];}

  // let sequence = [];

  // // //iterate from 1 to length
  // //   //calculate base ^ length
  // //   //push that value into the sequence array
  // // for (let i = 1; i <= length; i++) {
  // //   sequence.push(Math.pow(base, i));
  // // }

  // sequence = [...powerSequence(base, length - 1), powerSequence(base, length - 1)[length - 2] * base];

  return sequence;
}

// console.log(
// powerSequence(3, 4),  // => [ 3, 9, 27, 81 ]
// // powerSequence(2, 6),  // => [ 2, 4, 8, 16, 32, 64 ]
// // powerSequence(8, 3)  // => [ 8, 64, 512 ]
// );


/*
collapseString
Write a function collapseString(str) that takes in a string as an argument. The function should return the string
where 'streaks' of consecutive characters are collapsed to a single character.

Hint: use the keyword continue

Examples:

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'
*/

function collapseString(str) {

  let collapsed = "";

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    let previousLetter = str[i - 1];
    if (currentLetter !== previousLetter) {
      collapsed += currentLetter;
    }

  }
  console.log(collapsed);
  return collapsed;

}

// collapseString('apple'); // => 'aple'
// collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
// collapseString('hello   app academy'); // => 'helo ap academy'

/*
oddWordsOut
Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

Examples:

oddWordsOut('go to the store and buy milk');  // => 'go to milk'
oddWordsOut('what is the answer');  // => 'what is answer'
*/

function oddWordsOut(sentence) {
  let words = sentence.split(" ");
  let newSentence = [];

  words.forEach(
    word => {
      if (word.length % 2 === 0) {
        newSentence.push(word);
      }
    }
  );

  console.log(newSentence.join(" "));

}

// oddWordsOut('go to the store and buy milk');  // => 'go to milk'
// oddWordsOut('what is the answer');  // => 'what is answer'


/*
mindPsAndQs
Write a function mindPsAndQs(str) that accepts a string of uppercase letters.
The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

Hint: Use two variables.
One to track the length of the current streak and another to track the length of the longest streak so far.
Think of using a strategy similar to maxValue. This can also be solved using a single loop!
Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP');  // => 1
mindPsAndQs('APCDQQPPC');  // => 4
mindPsAndQs('PQPQ');  // => 4
mindPsAndQs('PPPXQPPPQ');  // => 5
*/

function mindPsAndQs(str) {

  const PQ = "PQ";

  let highestStreak = 0;

  //iterate over the string
    //create a new streak
    //if the current letter is P or Q
    //start a streak (streak = 1)
      //if a letter is not P or Q, streak = 0
      //but first, compare currentStreak to highest
        // and update highest if necessary

  let currentStreak = 0;
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    if (PQ.includes(currentLetter)) {
      currentStreak++;
    } else {
      highestStreak = Math.max(highestStreak, currentStreak);
      currentStreak = 0;
    }
  }
  highestStreak = Math.max(highestStreak, currentStreak);

  console.log(highestStreak);
  return highestStreak;

}

// mindPsAndQs('BOOTCAMP');  // => 1
// mindPsAndQs('APCDQQPPC');  // => 4
// mindPsAndQs('PQPQ');  // => 4
// mindPsAndQs('PPPXQPPPQ');  // => 5

/*
commonFactors
Write a function commonFactors(num1, num2) that returns an array that contains the
common factors between both numbers. A factor is a number that divides another number with no remainder.

Examples:

commonFactors(12, 50);  // => [ 1, 2 ]
commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
commonFactors(11, 22);  // => [ 1, 11 ]
commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]
*/

function commonFactors(num1, num2) {

  let factors = [];

  //iterate from 1 to lowest of the two numbers
  //check if both can be evenly divided by i
  //if so, push to the factors array

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }

  //console.log(factors);
  return factors;
}

// commonFactors(12, 50);  // => [ 1, 2 ]
// commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22);  // => [ 1, 11 ]
// commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

/*
commonPrimeFactors
Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an
array of all prime factors that are common between the two numbers.
A factor is a number that divides another number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]
*/

function isPrime(number) {

  if (number === 1) {return false}

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function commonPrimeFactors(num1, num2) {
  let factors = commonFactors(num1, num2);
  return factors.filter(factor => isPrime(factor));
}

// console.log(
// commonPrimeFactors(12, 50),  // => [ 2 ]
// commonPrimeFactors(6, 24), // => [ 2, 3 ]
// commonPrimeFactors(11,22),  // => [ 11 ]
// commonPrimeFactors(45, 60)  // => [ 3, 5 ]
// );


/*
splitHalfArray
Write a function splitHalfArray(array) that takes in an array as an argument
and returns two halves of that array split in the middle.
If the array has an odd number of elements, then the middle element should be excluded.

Examples:

splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
*/

function splitHalfArray(array) {
  let splits = [];

  //[1, 2, 3, 4]
  //array length is 4, 4/2 = 2
  //array.slice(0, 2) = [1, 2]
  //array.slice(2) = [3, 4]

    //[1, 2, 3, 4, 5]
  //array length is 5, 5/2 = 2.5, math.ceil = 3
  //array.slice(0, 2) = [1, 2] floor
  //array.slice(3) = [4, 5] ceil

  let floor = Math.floor(array.length / 2);
  let ceil = Math.ceil(array.length / 2);

  splits.push(array.slice(0, floor));
  splits.push(array.slice(ceil));

  console.log(splits);
}

// splitHalfArray([1, 2, 3, 4, 5]);
//   // => [ [ 1, 2 ], [ 4, 5 ] ]

// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
//   // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

/*
threeUniqueVowels
Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false
*/

//const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function threeUniqueVowels(string) {

  let count = 0;
  let found = "";

  //iterate through the string
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
  //check if currentLetter is a vowel and has not been found yet
    if (VOWELS.includes(currentLetter) && !found.includes(currentLetter)) {
      //increment count
      count++;
      //add to found
      found += currentLetter;
    }
  }

  console.log(count >= 3);
}

// threeUniqueVowels('delicious');  // => true
// threeUniqueVowels('the bootcamp');  // => true
// threeUniqueVowels('bootcamp');  // => false
// threeUniqueVowels('dog');  // => false
// threeUniqueVowels('go home');  // => false

/*
vowelShift
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function vowelShift(sentence) {

  let newSentence = "";

  //iterate over the string
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    let indexOfVowel = VOWELS.indexOf(currentLetter);
    //if currentLetter is not a vowel
    if (indexOfVowel === -1) {
      //add it to the newSentence
      newSentence += currentLetter;
    } else {  //if currentLetter is a vowel
      //add the vowel at VOWELS[index + 1] to the newSentence (or at index 0, in the case of U);
      newSentence += VOWELS[indexOfVowel + 1] || VOWELS[0];
    }
  }
  console.log(newSentence);
}

// vowelShift('bootcamp');  // => 'buutcemp'
// vowelShift('hello world');  // => 'hillu wurld'
// vowelShift('on the hunt');  // => 'un thi hant'

/*
hasSymmetry
Write a function hasSymmetry(array) that takes in an array.
The function should return true if the array has symmetry,
false otherwise.
For an array to have symmetry, it should be the same forwards and backwards.

TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
*/

function hasSymmetry(array) {

  let symmetrical = true;

  //iterate over the array, but only to the half
    //compare element at start to end
    //if they are not equal
      //symmetrical is false

  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    let start = array[i];
    let end = array[array.length - 1 - i];
    if (start !== end) {symmetrical = false;}

  }

  console.log(symmetrical);

}

// hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
// hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
// hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
// hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false

/*
evenSumArray
Write a function evenSumArray(array) that takes in an array of numbers
and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

Examples:

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
*/

function evenSum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}


function evenSumArray(array) {

  //map the array, calling the evenSum function
  console.log(array.map(number => evenSum(number)));

}

// evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
// evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

/*
numsToWords
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with it's "word" representation.
Assume the input string only contains numeric characters.

Examples:

numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'
*/

function numsToWords(numString) {

  let words = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
  };

  let string = "";

  for (let i = 0; i < numString.length; i++) {
    string += words[numString[i]];
  }

  console.log(string);
}

// numsToWords('42') // => 'FourTwo'
// numsToWords('123') // => 'OneTwoThree'
// numsToWords('159598') // => 'OneFiveNineFiveNineEight'
/*
moreDotLessDash
Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
*/

function moreDotLessDash(str) {
  let dots = 0;
  let dashes = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {dots++;}
    if (str[i] === "-") {dashes++;}
  }
  console.log(dots > dashes);

  return dots > dashes;
}

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
