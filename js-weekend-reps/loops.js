/**
 * Loops
 */

/* The Basics
Write a loop that will print out all the numbers from 0 to 10, inclusive.

Write a loop that will print out all the numbers from 10 up to and including 400.

Write a loop that will print out every third number starting with 11 and going no higher than 4000.
*/

// Uncomment to run code
// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

// for (let i = 10; i <= 400; i += 1) {
//   console.log(i);
// }

// for (let i = 11; i <= 4000; i += 3) {
//   console.log(i);
// }

/* Get Even
Print out the numbers that are within the range of 1 - 100.

Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
*/

// for (let i = 1; i <= 100; i += 1) {
//   i % 2 === 0 ? console.log(`${i} <-- is an even number`) : console.log(i);
// }

/* Give Me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
Example Output:

I found a 5. High five!
I found a 10. High five!
*/

// for (let i = 0; i <= 100; i += 1) {
//   (i % 5 === 0) ? console.log(`I found a ${i}. High five!`) : console.log(i);
// }


/* Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your banck_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your banck_account should have $10,100 in it.
*/

// let bank_account = 0;

// for (let i = 1; i <= 10; i += 1) {
//   bank_account += i;
// }

// console.log(bank_account);

// bank_account = 0;

// for (let i = 1; i <= 100; i += 1) {
//   let bonus = i * 2;
//   bank_account += bonus;
// }

// console.log(bank_account);


/* Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

You just solved Project Euler problem 1!

Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.
*/

let sum = 0;

for (let i = 0; i < 1000; i += 1) {
  if (i % 3 === 0) {
    sum += i;
  } else if (i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);