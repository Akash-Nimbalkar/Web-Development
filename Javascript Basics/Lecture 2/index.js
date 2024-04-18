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
