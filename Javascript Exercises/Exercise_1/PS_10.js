/*Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. 
The returned array should be sorted in ascending order. For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], 
the function should return [3, 4, 5]. */

function getCommonElements(arr1, arr2) {
  let common = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!common.includes(arr1[i])) {
        common.push(arr1[i]);
      }
    }
  }

  common.sort((a, b) => a - b);

  return common;
}

let arr1 = [1, 2, 3, 4, 5, 5];
let arr2 = [3, 4, 5, 6, 7, 5];

let common = getCommonElements(arr1, arr2);
console.log(common);
