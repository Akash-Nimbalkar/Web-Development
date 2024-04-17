// Line below is used to print on the console window
console.log("Namaste Duniya! Version45");

var b=4;
console.log(b);

if (1) {
  let b = 5;
  console.log(b);
}

var c = 6;
var c = 7;

const c  =10;
c = 45;

let m;
console.log(m);

let y = null;
console.log(y);

let myName = "Akash";
console.log(myName);

myName = 55;
console.log(myName);

///Object
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person);

//How to access objects properties ?

//1. Dot Notation
console.log(person.age);

//2. Bracket Notation
console.log(person["age"]);

let names = ["Akash", "Samarth", "Sumeet"];
console.log(names[1]);

console.log(names[3]);

names[3] = "Pruthvi";
console.log(names[3]);

names[1] = 100;
console.log(names[1], names[2]);

console.log(names);

console.log(6 > 7);

console.log(6 === 7);

console.log(6 !== 7);

let num = 100;
let str = "100";

//Strict Equality - The data type and value should be same
console.log(num === str);

//Loose Equality - Only the value should be same (datatype doesn't matter)
console.log(num == str);

let age = 25;
let status = age >= 18 ? "Yes Vote" : "No Vote";
console.log(status);

//All mentioned below are falsey values

console.log(false || false);
console.log(false || undefined);
console.log(false || null);
console.log(false || 0);
console.log(false || NaN);
console.log(false || "");

let marks = 87;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else {
  console.log("E");
}

let n = 3;

switch (n) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  default:
    console.log("D");
}

for (let i = 0; i < 5; i++) {
  console.log("Akash" + i);
}

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let x = 0;

do {
  console.log(x);
  x++;
} while (x > 10);
