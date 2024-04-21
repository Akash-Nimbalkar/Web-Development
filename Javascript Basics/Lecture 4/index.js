//Array Object

//1.Creation of arrray
let numbers = [1, 3, 5, 7, 9];

console.log(numbers);
console.log(numbers[3]);

//2.Insertion

//2.1.Insertion at end (push)
numbers.push(11);
console.log(numbers);

//2.2.Insertion at start (unshift)
numbers.unshift(0);
console.log(numbers);

//2.3. Insertion at middle (splice)
numbers.splice(2, 0, "a", "b", "c", "d"); //1st argument is index at which we want to insert,
//2nd argument is delete count - how many elements do we want to delete and remaining are the values which we want to insert
console.log(numbers);

//3.Searching

//3.1 Searching (with primitives) - 1.indexOf 2. includes

console.log(numbers.indexOf("d")); // if it prints other than -1, that means given value is present in array

console.log(numbers.indexOf(10)); // It will print -1 as 10 is not present in the array

console.log(numbers.includes(7));

console.log(numbers.indexOf(5, 8)); //Argument 8 indicates that searching for 5 will start from index 8 to last index

//3.2 Searching (with objects/references)

//Array of objects
let courses = [
  { no: 1, naam: "akash" },
  { no: 2, naam: "mahesh" },
];

console.log(courses);
console.log(courses[1]["naam"]);

console.log(courses.indexOf({ no: 2, naam: "mahesh" })); //Its giving -1 as output even though given object is present in array

console.log(courses.includes({ no: 2, naam: "mahesh" })); //Its giving false as output even though given object is present in array

//The function passed as an argument is called as 'call back function' , as outer function's execution is dependent on the executuion of inner function call
let ans = courses.find(function (course) {
  return course.naam === "akash";
});
console.log(ans);

//Converting the above logic into more readable function using arrow function
let ans2 = courses.find((course) => course.naam == "akash");
console.log(ans);

//4.Removing an element

let nums = [1, 2, 3, 4, 5, 6, 7];

//4.1 Removing last element (pop)
nums.pop();
console.log(nums);

//4.2 Removing first element (shift)
nums.shift();
console.log(nums);

//4.3 Removing any midddle element(s) (splice)
nums.splice(2, 2); //2 indicates from where we want to delete elements and 2nd argument 2 indicates no. of elements we want to delete from index 2
console.log(nums);

//5. Emptying an element
let nums2 = nums;

//nums = []; //will not work
console.log(nums);
console.log(nums2); //It will still point to values in nums

nums.length = 0; //Best Practice to empty the array

console.log(nums);
console.log(nums2);

let nums3 = [2, 4, 6, 8, 10];
nums3.splice(0, nums3.length);
console.log(nums3);

//6. Combining
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = first.concat(second);

console.log(combined);

//7.Slicing
let sliced = combined.slice(1, 4); //first index is included but second one is excluded in range
console.log(sliced);
let sliced2 = combined.slice(1);
console.log(sliced2);

//8. Combining objects

//8.1 Using Object.assign()

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let comb1 = Object.assign(
  {},
  obj1,
  obj2
); /* when combining obj1 and obj2, the value of b from obj2 (which is 3) overrides the
 value of b from obj1 (which is 2). */
console.log(comb1);

//8.2 Using spread(...) operator
let comb2 = { ...obj1, ...obj2 };
console.log(comb2);

//9. Slicing Objects

//9.1 Using Object Destructuring:

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Destructure the 'obj' object: extract properties 'b' and 'e', and collect the rest into 'sliced3'
let { b, e, ...sliced3 } = obj;

console.log(sliced3);

//10. Concatenating using spread operator
let nums11 = [1, 2, 3];
let nums22 = [4, 5, 6];

let comb3 = { ...nums11, ...nums22 };
console.log(comb3);

//11. Iterating over an array
let arr = [10, 20, 30, 40, 50];

for (let value of arr) {
  console.log(value);
}

arr.forEach(function (value) {
  console.log(value);
});

// using arrow function
// arr.forEach((value) => console.log(value));

//12. Joining array

let nums4 = [20, 40, 60, 80];
let joined = nums4.join(",");
console.log(joined);

//13. Splitting array
let splitted = joined.split(",");
console.log(splitted);

//14. Sorting array
let unsorted = [4, 67, 0, 12, 3, 100, 5, 34];
unsorted.sort(); //sort() sorts elements as strings by default, leading to lexicographic ordering
console.log(unsorted);

unsorted.sort((a, b) => a - b);
console.log(unsorted);

unsorted.reverse();
console.log(unsorted);

//15. Sorting objects based on keys
let students = [
  { name: "Charlie", age: 18 },
  { name: "Bob", age: 22 },
  { name: "Alice", age: 20 },
];

// Sort the students array based on the 'name' property
students.sort((a, b) => {
  if (a.name < b.name) {
    return -1; // 'a' comes before 'b'
  } else if (a.name > b.name) {
    return 1; // 'b' comes before 'a'
  } else {
    return 0; // Names are equal, order remains unchanged
  }
});

console.log(students);

//16. Filtering an array

let nums5 = [1, -1, 4, 6, 8, -3, -8, 0];

//Filtering out only positive values
// let filtered = nums5.filter(function (val) {
//   return val >= 0;
// });

let filtered = nums5.filter((val) => val >= 0);

console.log(filtered);

// 17. Mapping arrays
let nums6 = [7, 8, 9, 10];

let mapped = nums6.map(function (value) {
  return "student_no" + value;
});
console.log(mapped);

//18. Mapping with objects
// let items = filtered.map(function (val) {
//   return { value: val };
// });

// let items = filtered.map(num => ({value: num}));

// console.log(items);

//19. Chaining
//Line no. 22 can also be written as -

let items = nums5.filter((val) => val >= 0).map((num) => ({ value: num }));

console.log(items);

//20. Reducing an array
let arr2 = [1, 5, 2, 18, 21, 4];

let total = 0;

for (value of arr2) {
  total += value;
}
console.log(total);

let totalSum = arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalSum);
