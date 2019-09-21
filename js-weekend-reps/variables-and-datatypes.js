/**
 * Variables and Datatypes
 */

/* Q + A
How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
*/

const qAndAResponses = [
  `Use the 'let' or 'const' keywords then the name of the variable, followed by the '=' operator, followed by the value to assign. 'var' is somewhat deprecated or should be used with intention.`,
  `Write the name of the variable, use the '=' operator, followed by the new value to assign to the variable.`,
  `Use 'let' or 'const keywords, then the '=' operator, followed by the name of the variable that you want to assign to the new variable.`,
  `Declaring a variable is when you create a new variable using oen of the declaration keywords followed by a name for the variable. Assigning means giving a value to a variable to store. Defining a variable is similar in that you are giving a variable a value to assign to the variable.`,
  `Pseudocoding is a plain English step by step of the code that you intend to write. Code syntax should be used sparsely if at all. Pseudocoding helps to lay out a plan before you begin to code, and then helps you to stay on track once you begin coding.`,
  `You should spend about 80% of your time planning and 20% of your time coding. More planning === better, quicker coding.`
];

console.log(qAndAResponses);

/* Strings
Create a variable called firstVariable.
Assign it the value of the string "Hello World"
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
*/
let firstVariable = 'Hello World';
firstVariable = 12;
let secondVariable = firstVariable;
secondVariable = 'any string';

console.log(firstVariable); // => Value of firstVariable is 12

const yourName = 'Steve';
console.log(`Hello, my name is ${yourName}.`);


/* Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
console.log(a && a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

/* The Farm
Declare a variable animal. Set it to be either "cow" or something else.
Write code that will print out "mooooo" if the it is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
*/
let animal = 'cow';

animal === 'cow' ? console.log('mooooo') : console.log(`Hey! You're not a cow.`);

/* Driver's Ed
Make a variable that holds a person's age. Be semantic.

Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/

let age = 0;

age >= 16 ? console.log('Here are the keys!') : console.log(`Sorry, you're too young.`);