//Write a program that displays a string in reverse order.

function reverseString(str) {
  let reversedString = "";

  let i = str.length - 1;

  for (i; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

let str = reverseString("Codehelp");
console.log(str);


//Approach 2 :
// const originalString = "CodeHelp";

// function reverseString(str) {
//   const reversedString = str.split("").reverse().join("");
//   return reversedString;
// }

// console.log(reverseString(originalString));
