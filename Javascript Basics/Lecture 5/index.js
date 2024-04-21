//Function call or invoke
run(); //Still it will work

// Hoisting - It is the process of moving variable and function declarations to the top of the file and this is done automatically by JS Engine

//1.Function Declaration
function run() {
  console.log("running");
}
//If I write action(); here then it will work as hoisting only works for function declaration not function assignment

//2.Function Assignment

//2.1 Named Function Assignment
let action = function walk() {
  console.log("Walking");
};

action();

let activity = action;
activity();

//2.2 Anonymous Function Assignment
let action2 = function () {
  console.log("Walking");
};

action2();

//3. JavaScript is dynamic language
let a = 1;
a = "x";
console.log(a);

function sum(a, b) {
  console.log(arguments); //arguments is special object in JS
  return a + b;
}

console.log(sum(5, 3));
console.log(sum(5)); // We are summing 5 + undefined,it will print NaN
console.log(sum()); // We are summing undefined + undefined,it will print NaN
console.log(sum(4, 7, 9, 3, 2, 1)); // We are summing 4+7 only rest arguments are ignored

// Making the sum() function dynamic so that it will work for any number of arguments

function dynamicSum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
console.log(dynamicSum(5, 3));
console.log(dynamicSum(5));
console.log(dynamicSum());
console.log(dynamicSum(4, 7, 9, 3, 2, 1));
console.log(dynamicSum(4, 7, 9, 3, 5.8, 2.3, 1.1));

//4. Rest Operator

function sum(...args) {
  console.log(args);
}

sum(1, 3, 5, 7, 9);

function sum2(val1, val2, ...args) {
  console.log("args is ", args);
}

sum2(1, 3, 5, 7, 9);

//5. Default Parameters

function interest(p, r = 5, n = 10) {
  // r and n are default parameters with values 5 and 10 respctively
  return (p * r * n) / 100;
}

console.log(interest(1000, 20, 8));
console.log(interest(1000, 20));
console.log(interest(1000));
console.log(interest(1000, undefined, 8)); // Interest = (1000*5*8)/100 = 400 But this is a bad practice

//6. Getter and Setter Methods
// let person = {
//   fName: "Akash",
//   lName: "Nimbalkar",
// };

// function fullName() {
//   //Issue with this code is that it is read only
//   return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

let person = {
  fName: "Akash",
  lName: "Nimbalkar",

  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  set fullName(value) {
    // if (typeof value !== string) {
    //   throw new Error("You have not sent a string");
    // }
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

person.fullName = "Narendra Modi";
console.log(person);

//7. Try and Catch
// try {
//   person.fullName = 1;
// } catch (e) {
//   alert(e);
// }

//8. Scope of variables

{
  let x = 10;
}
console.log(x); //Out of scope - {} has scope inside braces only

function ab() {
  const ab = 65;
}

console.log(ab);

function ba() {
  const ab = 75;
}
