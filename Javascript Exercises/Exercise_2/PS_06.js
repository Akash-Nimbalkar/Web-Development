//Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumEvenNumbers(nums) {
  let total = 0;

  for (let val of nums) {
    total += val;
  }

  return total;
}

let nums = [1, 3, 5, 2, 4, 6];
console.log(sumEvenNumbers(nums));
