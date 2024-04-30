//Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

let ans = countLetters('WebDevelopment');
console.log(ans);