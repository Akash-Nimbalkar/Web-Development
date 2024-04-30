//Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function getData(obj, prop) {
  let ans = obj[0];

  for (let val in obj) {
    for (let key in obj[val]) {
      if (key == prop) {
        if (obj[val][key] > ans[prop]) {
          ans = obj[val];
        }
      }
    }
  }

  return ans;
}

const arr1 = [
  { name: "apple", price: 1 },
  { name: "banana", price: 2 },
  { name: "orange", price: 3 },
];

const arr2 = [
  { name: "A", price: 100 },
  { name: "B", price: 2000 },
  { name: "C", price: 300 },
];

let ans = getData(arr2, "price");
console.log(ans);
