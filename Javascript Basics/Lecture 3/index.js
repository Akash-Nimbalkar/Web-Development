//1.Math object
console.log(Math.random());
console.log(Math.random());

console.log(Math.PI);

console.log(Math.round(1.8));
console.log(Math.round(1.51));

console.log(Math.max(1, 4, 7, 9));
console.log(Math.min(1, 4, 7, 9));

console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.abs(-(-4)));

//2.String Object

//Primitive string
let lastName = "Nimbalkar";
console.log(lastName);
console.log(typeof lastName);

//Object String
let firstName = new String("Akash");
console.log(firstName);
console.log(typeof firstName);

console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.includes("as"));
console.log(firstName.startsWith("Am"));
console.log(firstName.endsWith("h"));
console.log(firstName.indexOf("s"));
console.log(firstName.toUpperCase());

let str = new String("rscoe  ");
console.log(str.trim());
console.log(str.length);

console.log(str.replace("coe", "cop"));

let msg = "This is my first message";
let words = msg.split(" ");
console.log(words);

let message = 'This is\n my "first" \n message';
// \" is used to include " " in given msg
console.log(message);

// Instead of using \n to print of new line, we can use `` backticks and style string accordingly and it will show string as we have written
let msg2 = `This is
 my
 second msg`;
console.log(msg2);

let msg3 = 
`Hello ${firstName},

Thanks for the opportunity,

Regards,
CEO`;
console.log(msg3);


//3.Date object

let date = new Date();
console.log(date);

let date2 = new Date('September 25 2003 11:50');
console.log(date2);

let date3 = new Date(2003, 8, 25, 12); //Indexing of months is 0-based like 0 for Jan 1 for feb...
console.log(date3);

date3.setFullYear(2004);
console.log(date3);
