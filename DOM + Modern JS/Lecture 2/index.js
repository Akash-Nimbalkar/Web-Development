// Adding 100 paras

const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para " + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took " + (t2 - t1) + " ms");

//optimising a bit
const t3 = performance.now();

let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para " + i;

  myDiv.appendChild(element);
}

document.body.appendChild(myDiv);

const t4 = performance.now();
console.log("This took " + (t4 - t3) + " ms");

//The above two approaches have 100 Reflow and 100 Repaint

//Optimising further using fragment
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para " + i;

  fragment.appendChild(newElement);
}

document.body.appendChild(fragment); //1 Reflow and 1 Repaint
const t6 = performance.now();
console.log("This took " + (t5 - t6) + " ms");

//Javascript is Single threaded language

function addPara() {
  let para = document.createElement("p");
  para.textContent = "Js is single threaded language";
  document.body.appendChild(para);
}

function appendNewMessage() {
  let para = document.createElement("p");
  para.textContent = "Js is dynamic language";
  document.body.appendChild(para);
}

addPara();
appendNewMessage();

document.addEventListener("click", function () {
  console.log("Hello Bhaiyya");
});
