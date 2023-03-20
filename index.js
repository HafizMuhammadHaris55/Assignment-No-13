// Strings:

// Write a js program to find the length of a string.
let a = "Hello World"
console.log(a.length);

// Write a js program to concatenate two strings.

console.log(a.charAt());

// Write a js program to convert a string to uppercase.
console.log(a.toUpperCase());
// Write a js program to convert a string to lowercase.
console.log(a.toLocaleLowerCase());
// Write a js program to check if a string contains a specific substring.
console.log(a.substring(2));

//  Write a js program to find the index of a specific character in a string.
console.log(a.indexOf("d"));

// Write a js program to replace a specific substring in a string.

console.log(a.replace("o","p"));



// Numbers:
let c = 3267
let e = 346653
// Write a js program to find the sum of two numbers.
console.log(e + c);

// Write a js program to find the difference between two numbers.
const num1 = 10;
const num2 = 5;
const difference = num1 - num2;
console.log(`The difference between ${num1} and ${num2} is ${difference}.`);
// Write a js program to find the product of two numbers.
let m = 5;
let m1 = 60;
let m3 = m * m1;
console.log(m3);
// Write a js program to find the quotient and remainder of two numbers.
let d = 73;
let d1 = 84;
let d2 = d % d1 ;
let d3 = d / d1 ;
console.log(d2 , d3);
// Write a js program to round a number to the nearest integer.
let x = Math.ceil(2.8347);
console.log(x);
// Write a js program to generate a random number between 0 and 1.
let z = Math.random()*2;
console.log(z);
// Write a js program to find the maximum and minimum of two numbers.
let q = Math.max(38, 89 ,216)
console.log(q);
// Write a js program to calculate the square root of a number.
let w = Math.sqrt(2 * 90)
console.log(w);
// Write a js program to calculate the absolute value of a number.
let num = -5;
let abs = Math.abs(num);
console.log(abs);

// Write a js program to calculate the power of a number.
let n = Math.pow(2 , 5)
console.log(n);

// Date Methods:

// Write a js program to get the current date and time.
let date = new Date();
console.log(date);
// Write a js program to get the current year.
// let date1 =  Date();
// let year = getFullYear();
// console.log(date1);

let currentDate = new Date();

let years= currentDate.getFullYear();

const date1 = new Date("2022-03-20");
const date2 = new Date("2022-03-25");
if (date1 > date2) {
  console.log("date1 is later than date2");
} else if (date1 < date2) {
  console.log("date1 is earlier than date2");
} else {
  console.log("date1 and date2 are the same");
}

const date5 = new Date(2022, 2, 20); // Note: month is zero-based, so 2 is March
console.log(date5); // returns a date object for March 20, 2022
    
const date6 = new Date();
const hours = date6.getHours();
const minutes = date6.getMinutes();
const seconds = date6.getSeconds();
console.log(`${hours}:${minutes}:${seconds}`); // returns the current time in the format of hh:mm:ss

const timeInMilliseconds = new Date().getTime();
console.log(timeInMilliseconds); // returns the current time in milliseconds since January 1, 1970

const date7 = new Date("2022-03-20");
const daysToSubtract = 5;
date.setDate(date.getDate() - daysToSubtract);
console.log(date7); // returns the date 5 days before the original date

// Math Methods:

// Write a js program to find the absolute value of a number.
let a2 = Math.abs(-8)
console.log(a2)
// Write a js program to find the highest value in a list of numbers.
let a3 = Math.max(8, 40 , 90, 100)
console.log(a3)
// Write a js program to find the lowest value in a list of numbers.
let a4 = Math.min(1 , 48 , -3 ,-40)
console.log(a4)
// Write a js program to round a number up to the nearest integer.
let a5 = Math.ceil(8.37)
console.log(a5)
// Write a js program to round a number down to the nearest integer.
let a6 = Math.floor(1.78432)
console.log(a6)
// Write a js program to calculate the exponential value of a number.
let base = 2;
let exponent = 3;
let result1 = Math.pow(base, exponent);

console.log(result1)
// Write a js program to calculate the natural logarithm of a number.

// Write a js program to calculate the sine of an angle in radians.
// Write a js program to calculate the cosine of an angle in radians.
// Write a js program to calculate the square root of a number.


// For loop:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}  

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const num4 = 5;
let factorial = 1;
for (let i = 1; i <= num4; i++) {
  factorial *= i;
}
console.log(factorial);

const num5 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num5} x ${i} = ${num5 * i}`);
}

let sum = 0;
for (let i = 2; i <= 100; i += 2) {
  sum += i;
}
console.log(sum)



// While Loop:

// Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.
// Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.
// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.
// Write a program that asks the user to enter a word and then prints out the word in reverse order.
// Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.

// Do-while Loop:

// Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.

// Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.
// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number. At the end of the loop, the program should ask the user if they want to play again.
// Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.
// Write a program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop".

// Switch case:

// 1. Write a js program to print day of week name using switch case.
let dayOfWeeks = new Date().getDay();
let days;
switch (dayOfWeeks)  {
    case 0:
      days =  ("Sunday")
        break;
        case 1:
            days =("Monday")
            break;
            case 2:
                days =("Tuesday")
               break;
        
        case 3:
        days =("Wednesday")
        break;
        
        case 4:
        days =("Thursday")
        break;
        
        case 5:
        days =("Friday")
        break;

        case 6:
        days =("Saturday")
        break;
    default:
        break;
}
console.log(days)



const year = new Date().getFullYear();
const month = new Date().getMonth();

let totalDays;

switch (month) {
  case 0: // January
  case 2: // March
  case 4: // May
  case 6: // July
  case 7: // August
  case 9: // October
  case 11: // December
    totalDays = 31;
    break;
  case 1: // February
    // Leap year check
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      totalDays = 29;
    } else {
      totalDays = 28;
    }
    break;
  case 3: // April
  case 5: // June
  case 8: // September
  case 10: // November
    totalDays = 30;
    break;
  default:
    totalDays = -1; // Invalid month
}

if (totalDays == -1) {
  console.log('Invalid month');
} else {
  console.log(`Total days in the current month: ${totalDays}`);
}




const letter = 'a'; // Change this to test different letters

let result;

switch (letter.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    result = 'vowel';
    break;
  default:
    result = 'consonant';
}

console.log(`${letter} is a ${result}`);





const a1 = 5;
const b1 = 7;

let max;

switch (true) {
  case a1 > b1:
    max = a1;
    break;
  case a1 < b1:
    max = b1;
    break;
  default:
    max = 'equal';
}

console.log(`The maximum between ${a1} and ${b1} is ${max}`);



const num3 = 8; // Change this to test different numbers

let results;

switch (num3 % 2) {
  case 0:
    results = 'even';
    break;
  case 1:
  case -1:
    results = 'odd';
    break;
  default:
    results = 'not an integer'; // This case is not necessary if num is guaranteed to be an integer
}

console.log(`${num3} is ${results}`);
