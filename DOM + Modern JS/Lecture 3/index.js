//Promise

// let myPromise = new Promise(function (resolve, reject) {
//   console.log("I am inside promise");
//   resolve(2003);
// });

// console.log("first");

// let myPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 1");
//   }, 5000);
//   //resolve(2509);
//   reject(new Error("Bhai yaar nahi ho raha"));
// });

// myPromise1.then((value) => {
//   console.log(value);
// });

// myPromise1.catch((error) => {
//   console.log("Received an Error!");
// });

//This is also valid
// myPromise1.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("Received an Error!");
//   }
// );

// let myPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 2");
//   }, 3000);
//   // resolve(2509);
//   //reject(new Error('Bhai yaar nahi ho raha'));
// });
// console.log("first");

// let waada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("settimeout1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = waada1.then(() => {
//   let waada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("settimeout2 started");
//     }, 3000);
//     resolve("waada2 released");
//   });
//   return waada2;
// });

// output.then((value) => {
//   console.log(value);
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("settimeout 1");
//   }, 2000);

//   resolve(true);
// });

// let p3 = p1.then(() => {
//   let p2 = new Promise((resolve, reject) => {
//     resolve("ABCD");
//   });
// });

//Asynchronous function

// async function abcd() {
//   return "kya hua tera waada";
// }

// async function utility() {
//   let mahaWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Maharashtra mein bahot garmi hain");
//     }, 5000);
//   });

//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi is cool");
//     }, 10000);
//   });

//   let mW = await mahaWeather; //The await keyword can only be used inside an async function.
//   //The await keyword makes the function pause the execution and wait for a resolved promise before it continues
//   let dW = await delhiWeather;

//   return [mW, dW];
//}

// async function utility()
// {
//   let content = await fetch('https://jsonplaceholder.org/posts/1');
//   // let output = await content.json();
//   let output = content.text();
//   console.log(output);
// }

// async function helper() {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "JSPM",
//       body: "high_bar",
//       userId: 2001,
//       weight:35,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response = content.json();
//   return response;
// }

// async function utility()
// {
//   let ans = await helper();
//   console.log(ans);
// }

//Closures

function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let ans = init();
ans();

function outer() {
  let a = 10;
  function inner1() {
    let a = 5;
    console.log(a);

    function inner2() {
      let a = 4;
      console.log(a);

      function inner3() {
        let a = 3;
        console.log(a);
      }
    }
  }
  return inner1;
}

let ans2 = outer();
ans2();

