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

console.log(
greatestCommonFactor(15, 25), // => 5
greatestCommonFactor(16, 24), // => 8
greatestCommonFactor(7, 11) // => 1
);

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
valueConcat
Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

Examples:

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]
threeInARow
Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
variableNameify
Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'
threeIncreasing
Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false
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
reverb
Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

Examples:

reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'
countRepeats
Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

Examples:

countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
countRepeats('hellobootcampprep'); // => 4
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
countAdjacentSums
Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) // => 2
countAdjacentSums([7, 2, 4, 6], 7) // => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
signFlipCount
Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3
powerSequence
Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

Examples:

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]
collapseString
Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

Hint: use the keyword continue

Examples:

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'
oddWordsOut
Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

Examples:

oddWordsOut('go to the store and buy milk');  // => 'go to milk'
oddWordsOut('what is the answer');  // => 'what is answer'
mindPsAndQs
Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP');  // => 1
mindPsAndQs('APCDQQPPC');  // => 4
mindPsAndQs('PQPQ');  // => 4
mindPsAndQs('PPPXQPPPQ');  // => 5
commonFactors
Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

Examples:

commonFactors(12, 50);  // => [ 1, 2 ]
commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
commonFactors(11, 22);  // => [ 1, 11 ]
commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]
commonPrimeFactors
Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]
splitHalfArray
Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

Examples:

splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
threeUniqueVowels
Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false
vowelShift
Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'
hasSymmetry
Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
evenSumArray
Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

Examples:

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
numsToWords
Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'
moreDotLessDash
Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false

*/
