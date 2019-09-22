/**
 * Functions
 */

/* printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
*/

// Skipped

/* printCool
Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";
*/

const printCool = (name) => `${name} is cool`;

console.log(printCool("Captain Reynolds"));

/* calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

console.log(calculateCube(5));
=> 125
*/
const calculateCube = (num) => Math.pow(num, 3);

console.log(calculateCube(5));

/* isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

console.log(isVowel("a"));
=> true
*/
const isVowel = (char) => {
  const vowels = 'AEIOUaeiou';

  return vowels.includes(char) ? true : false;
}

console.log(isVowel("A")); // => true
console.log(isVowel("a")); // => true
console.log(isVowel("B")); // => false

/* getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]
*/
const getTwoLengths = (str1, str2) => [ str1.length, str2.length ];

console.log(getTwoLengths("Hank", "Hippopopalous")); // => [4, 13]


/* getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]
*/
const getMultipleLengths = (arr) => arr.map(str => str.length);

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // => [5, 4, 2, 2, 4] 

/* maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

console.log(maxOfThree(6, 9, 1));
=> 9

Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
*/
const maxOfThree = (num1, num2, num3) => {
  if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1) {
    return num3;
  }
  return num1;
}

console.log(maxOfThree(6, 9, 1)); // => 9
console.log(maxOfThree(1, 2, 3)); // => 3
console.log(maxOfThree(3, 2, 1)); // => 3
console.log(maxOfThree(2, 3, 1)); // => 3

/* printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"
*/
const printLongestWord = (arr) => {
  let longestWord = '';
  let longestWordLength = 0;
  
  arr.forEach(word => {
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = word.length;
    }
  });
  
  return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); // => "Peanutbutter"
console.log(printLongestWord([ 'one', 'two', 'three', 'four', 'five', 'six', 'seven' ])); // => "Peanutbutter"

/* transmogrify
Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

console.log(transmogrify(5, 3, 2));
=> 225
*/
const transmogrify = (num1, num2, num3) => Math.pow((num1 * num2), num3);

console.log(transmogrify(5, 3, 2)); // => 225

/* reverseWordOrder v2
Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

See if you can do it without googling.

Remember: You can index directly into a string:

"hello world"[7]
=> "o"

That and basic loops and variables and arrays are all you need to solve this without the Array methods.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I"
*/
const reverseWordOrder = (str) => {
  let reversedStrArr = [];
  let tempStr = '';
  let reversedStr = '';

  // Iterate the string forwards and build a string until reaching a space charater, then push the string before the space to the reversedStrArr. Push the space char to the reversedStrArr. If the loop reaches the last character, push the tempStr to the reversedStrArr
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) === 32) {
      reversedStrArr.push(tempStr);
      reversedStrArr.push(str[i]);
      tempStr = '';
    } else if (i === str.length - 1) {
      tempStr += str[i];
      reversedStrArr.push(tempStr);
    } else {
      tempStr += str[i];
    }
  }

  // Iterate the reversedStrArr in reverse and build the reversedStr string to return the string with words reversed.
  for (let i = reversedStrArr.length - 1; i >= 0; i -= 1) {
    reversedStr += reversedStrArr[i];
  }

  return reversedStr; 
}

console.log(reverseWordOrder("Ishmael me Call")); // => "Call me Ishmael"
console.log(reverseWordOrder("I use Lâncome on my comb")); // => "comb my on Lâncome use I"

/* Get down and dirty with Math.random()
Write a function that will return a random integer between 1 and 10. Test it.
Write a function that will return a random integer between 10 and 100. Test it.
Write a function that will return a random number between 532 and 13267. Test it.
Write a function that will return a random number between 1 and 10. Test it.
Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
*/
const randInt1to10 = () => Math.floor((Math.random() * 10) + 1);  
const randInt10to100 = () => Math.floor((Math.random() * 100) + 10);
const randNum532to13267 = () => (Math.random() * 13267) + 532;
const randNum1to10 = () => (Math.random() * 100) + 10;     

console.log(randInt1to10());
console.log(randInt10to100());
console.log(randNum532to13267());
console.log(randNum1to10());

const quotes = [
  `In three words I can sum up everything I've learned about life: it goes on.`,
  `Today you are you! That is truer than true! There is no one alive who is you-er than you!`,
  `If opportunity doesn't knock, build a door.`
]

const randQuote = (arr) => quotes[Math.floor(Math.random() * arr.length)];

console.log(randQuote(quotes));
