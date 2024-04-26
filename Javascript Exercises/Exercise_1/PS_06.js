//Write a program that takes a number and checks whether it is positive, negative, or zero.

function checkNum(num) {
  if (num == 0) {
    console.log(`${num} is zero`);
  } else if (num > 0) {
    console.log(`${num} is positive`);
  } else {
    console.log(`${num} is negative`);
  }
}


num(-3);