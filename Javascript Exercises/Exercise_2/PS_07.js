//Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

function checkStrings(strings) {
  let new_strings = [];
  for (let str of strings) {
    if (str.length > 5) new_strings.push(str);
  }

  return new_strings;
}
strings = ["ABC", "ABCDF", "BIYINJHH", "AA", "O", "BHIOLP", "AMKOIUN"];
let ans = checkStrings(strings);
console.log(ans);
