//Write a function that takes two numbers as arguments and returns the larger number.

function getMaxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
}

let ans = getMaxNumber(20, 400);
console.log("The maximum number is " + ans);
