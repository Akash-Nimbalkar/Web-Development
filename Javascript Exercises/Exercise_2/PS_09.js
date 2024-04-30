//Write a function that takes an array of objects and returns an array of all the values of a specified property name.

function getData(obj, prop) {
  let ans = [];

  for (let val in obj) {
    for (let key in obj[val]) {
      if (key == prop) {
        ans.push(obj[val][key]);
      }
    }
  }

  return ans;
}

const people = [
  { name: "Pranay", age: 20, gender: "male" },
  { name: "Nidhi", age: 21, gender: "female" },
  { name: "Soumya", age: 21, gender: "male" },
];
let ans = getData(people, "name");
console.log(ans);
