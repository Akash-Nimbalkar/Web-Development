// This is important as functions are object and we need to use same function(object) for remobeEventListener() method so declaring
// it first like this with name can solve this problem.

// function action() {
//   console.log("I have clicked on the document");
// }

// document.addEventListener("double click", action());

// document.removeEventListener("click", action());

// const content = document.querySelector("#wrapper");

// content.addEventListener("click", function (eventObj) {
//   //eventObject is the event object
//   console.log(eventObj);
// });

// //Default Action
// let links = document.querySelectorAll("a");

// let thirdLink = links[2];

// thirdLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Maza Aaya...");
// });
//Avoid Too Many Listeners

//Method 1 :
// let myDiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   newElement.addEventListener("click", function (event) {

//     console.log("I have clicked on para");
//   });

//   myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

// Drawback of method 1: Instead of defining function for every p, we can make single function and replace defination with its name simply

//Method 2 :

// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log("I have clicked on para");
// }

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   newElement.addEventListener("click", paraStatus);

//   myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

// Drawback of method 2: Instead of applying listeners to each p, we can apply directly to div as div contains only 100 paragraphs
//Method 3 :

// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log("I have clicked on para");
// }

// myDiv.addEventListener("click", paraStatus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;
//   myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

// Drawback of method 3: Now we have lost the access to paragraphs, on clicking anywhere on div will display that msg unlike on clicking on paras

//Method 4: I want to access paragraphs individually by adding event listener on div only

// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log("Para" + event.target.textContent);
// }

// myDiv.addEventListener("click", paraStatus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;
//   myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

//Problem of span and para
// let element = document.querySelector("#art");

// element.addEventListener("click", function (event) {
//   console.log("You have clicked on span" + event.target.textContent);
// });
//In above code on clicking on paras also the function gets executed but we want it to execute only for span. The solution is-
let element = document.querySelector("#art");

element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("You have clicked on span" + event.target.textContent);
  }
});
