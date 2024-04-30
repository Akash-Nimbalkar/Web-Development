//Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(nums) {
  let total = 0;

  for (let val of nums) {
    if (val % 2 == 0) {
      total += val;
    }
  }

  return total;
}

let nums = [1, 3, 5, 2, 4, 6];
console.log(sumEvenNumbers(nums));
