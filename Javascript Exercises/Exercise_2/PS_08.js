//Write a function that takes an object and returns an array of all the keys in the object.

function getKeys(info) {
  let keys = [];

  for (let key in info) {
    keys.push(key);
  }

  return keys;

  //Approach 2
  //   const keys = Object.keys(obj);
  //   return keys;
}

let info = { Name: "Akash", Age: 20, City: "Pune", Pincode: 411033 };

let ans = getKeys(info);
console.log(ans);
