//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

function sum(num) {
  let ans = 0;

  for (let i = 1; i <= num; i++) {
    ans += i;
  }

  console.log(`The sum of 1 to ${num} is ${ans}`);
}

sum(150);