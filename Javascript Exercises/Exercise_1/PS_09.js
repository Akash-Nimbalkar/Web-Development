//Write a program that takes a string and prints out the number of vowels in the string.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) count++;
  }

  console.log(`The given string ${str} has ${count} vowel(s)`);
}

countVowels("CodeHelp"); // output: 3
countVowels("hello"); // output: 2
countVowels("world"); // output: 1
countVowels("aeiou"); // output: 5
countVowels("JavaScript"); // output: 3
countVowels("Pranay"); // output: 2
