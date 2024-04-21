console.log("Shree Swami Samarth");

//Creating an object

let rectangle = {
  length: 1,
  breadth: 2,

  draw() {
    console.log("Drawing Rectangle");
  },
};

rectangle.draw();

//Factory Function

function createRectangle(l, b) {
  return (rectangle = {
    length: l,
    breadth: b,

    draw: function () {
      console.log("Drawing Rectangle");
    },
  });
}

//Creation of object using factory function
let obj1 = createRectangle(12, 20);
let obj2 = createRectangle(2, 2);
let obj3 = createRectangle(8, 5);

console.log(obj1);
console.log(obj2);
console.log(obj3);

//Constructor Function - used to initialise properties and methods
function Rectangle1() {
  (this.length = 1),
    (this.breadth = 2),
    (this.draw = function () {
      console.log("Drawing...");
    });
}

//Creating object using constructor function

let rectangle1 = new Rectangle1();
console.log(rectangle1);

function Rectangle2(l, b) {
  (this.length = l),
    (this.breadth = b),
    (this.draw = function () {
      console.log("Drawing...");
    });
}

//Creating object using constructor function

let rectangle2 = new Rectangle2(10, 3);
console.log(rectangle2);

//Dynamic nature of objects

rectangle2.color = "red";
console.log(rectangle2);

delete rectangle2.color;
console.log(rectangle2);

console.log(rectangle.constructor);

//Functions are objects

let rectangle3 = new Function(
  "length",
  "breadth",
  `this.length = length;
  this.breadth = breadth;
  this.draw = function()
  {
  console.log('Drawing');
  }`
);

let rect = new rectangle3(100, 200);
console.log(rect);

let a = 10;
let b = a;
a++;
console.log(a + " " + b);

let aa = { value: 10 };
let bb = aa;
console.log(aa.value + " " + bb.value);
aa.value++;
console.log(aa.value + " " + bb.value);

let x = 20;

function inc(x) {
  x++;
}
inc(x);
console.log(x);

let objj = { value: 2 };
function incc(a) {
  a.value++;
}

console.log(objj.value);

let newRectangle = {
  length: 2,
  breadth: 4,
};
//for-in loop - used to loop over the properties of the object
for (let key in newRectangle) {
  console.log(key, newRectangle[key]);
}

//for-of loop

//Giving error
// for (let key of newRectangle) {
//   console.log(key, newRectangle[key]);
// }

for (let key of Object.keys(newRectangle)) {
  console.log(key);
}

for (let key of Object.entries(newRectangle)) {
  console.log(key);
}

// in - used to check whether a particular property is present in object or not
if ("color" in rectangle) {
  console.log("rectangle has color property");
} else {
  console.log("rectangle don't have color property");
}

//Object cloning

let src = {
  a: 10,
  b: 20,
  c: 30,
};

let dest1 = {};
//1.Copying src into dest using for in loop
for (let key in src) {
  dest1[key] = src[key];
}
console.log("dest1", dest1);

//2. Using Object.assign()
let src2 = { value: 100 };
let dest2 = Object.assign({}, src,src2);
console.log("dest2", dest2);

//3. Using Spread Operator(...)
let dest3 = { ...src };
console.log("dest3", dest3);


