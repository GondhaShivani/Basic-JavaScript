/*




----------------------------------section-11 Events in JS




*/

// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing)
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File in video -------------------------------------------- ((( Time : 9.45.41 )))

// 2️⃣: What is Event Object?
// Event object is the parent object of the event object.
// for Example
// MouseEvent, focusEvent, KeyboardEvent etc <- event objects -> parent of these event objects are -> Event object.
// ----------------------------------------------------------------------------- Video ((( time 10.00.01 )))

// ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML
// document belongs to the MouseEvent Object.
// -------------------------------------------------------------------------------Video ((( time 10.06.53 )))

// ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard,
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp
// --------------------------------------------------------------------------------Video ((( time 10.12.13 )))

// 5️⃣ InputEvents in JavaScript
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the
// checked state has been changed.
// ---------------------------------------------------------------------------------Video ((( time 10.17.20 )))

// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************

// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// 1️⃣ setTimeout() ---------------------------------------- 10.33.57

// 2️⃣ clearTimeout() ---------------------------------------10.39.41

// 3️⃣ setInterval() ----------------------------------------10.45.13

// 4️⃣ clearInterval()

/*










----------------------------------------section - 12 oops in js












*/

// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container,
// we can refer this as an Objects.

// object = school bag

// How to create an Object?
/* 



// 1st way
console.log("-------------1st way-----------");
let bioData = {
  name: "shivani",
  age: 20,
  getdata: function () {
    console.log(`my name is ${bioData.name} and age is ${bioData.age}.`);
  },
};

bioData.getdata();
console.log(bioData.name);

//2nd way
console.log("-------------2nd way--------------");
let bioData1 = {
  name: "shivani",
  age: 20,
  getdata() {
    console.log(`my name is ${bioData1.name} and age is ${bioData1.age}.`);
  },
};

bioData1.getdata();
console.log(bioData1.name);

//object in object
console.log("-------------object in object--------------");
let bioData2 = {
  name: {
    fname: "shivani",
    lname: "gondha",
  },
  age: 20,
  getdata() {
    console.log(`my name is ${bioData2.name} and age is ${bioData2.age}.`);
  },
};

bioData1.getdata();
console.log(bioData2.name.lname);




 */
//-----------------------------------------------------------------------------

// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context.
// The this object can have different values depending on where it is placed.

//example runs in terminal
// // For Example 1

//console.log(this); //Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

//console.log(alert("Hello"));

//console.log(this.alert("Hello"));

// // it refers to the current context and that is window global object

// // ex 2
// function myName() {
//     console.log(this);
// }
// myName();

// // ex 3

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// // ex 4
// const obj = {
//     myAge : 21,
//     showMyName() {
//       console.log(this.myAge);
//     }
// }
// obj.showMyName();

/*




// // ex 5
// // --------------------------------
//this object will not work with arrow function bcz arrow function is bound to class.
//------------------------------------
// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();




*/
// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();

// // call method is used to call the method of another object
// // or with call(), an object can use a method belonging to another object

// // But as per other it is simply the way to use the this keyword or another object

/*






*/
//-----------------------------------------------------------------------------
//                           Array Destructering
//-----------------------------------------------------------------------------
/*

const mydata = ["shivani", "Gondha", 21];
 
let fname = mydata[0];
let lname = mydata[1];
let age = mydata[2];
console.log(fname); 
*/

//  OR

/* 

//in this method position matters alot
const mydata = ["shivani", "Gondha", 21];
 
//let [fname, lname, age] = mydata;
//console.log(fname); 

//you can add values too.

let [fname, lname, age, favColor = "blue"] = mydata;
console.log(favColor); 

*/
/*







*/
//-----------------------------------------------------------------------------
//                           object Destructering
//-----------------------------------------------------------------------------

//same as array but by using { } instead of [ ].

/* 
const mydata = {
  fname: "shivani",
  lname: "Gondha",
  age: 21,
}; 
*/

//let { fname, lname, age } = mydata;
//console.log(fname);

//you can add values too.

//let { fname, lname, age, favColor = "blue" } = mydata;
//console.log(favColor);
/*







*/
//-----------------------------------------------------------------------------
//                           object properties
//-----------------------------------------------------------------------------

/* 
//we can use dynamic properties
let myName = "shivani"; //variable
const myObj = {
  [myName]: "hello how are you !!",
  [19 + 1]: "is my age...",
};
console.log(myObj);
*/

//---------------------if key and value name are same then no need to write 2 times.
/* 

let myage = 20;
let study = "IT";
const myObj = {
  myage: myage, //key: value(upper vadi)
  study: study,
};
console.log(myObj);

*/

// OR

/* 
let myage = 20;
let study = "IT";
const myObj = {
  myage,
  study,
};
console.log(myObj);
 */
/*







*/
//-----------------------------------------------------------------------------
//                           spread operator
//-----------------------------------------------------------------------------
/* 
const colors = ["red", "green", "blue", "white", "pink"];

const myColors = ["red", "green", "blue", "white", "pink", "yellow", "black"];
console.log(myColors);
// // // 2nd time add one more color on top and tell we need to write it again on myColor array too

const MyFavColors = [...colors, "orange", "peach"];
console.log(MyFavColors);

 */
/*








*/
// ES7 features

// 1: array include
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3);

//----------------------------------------------------------------------------
/* 


let myNameame = "shivani".padStart(10, "-");
console.log(myNameame); //---shivani

let myNameame2 = "shivani".padEnd(9, "*");
console.log(myNameame2); //---shivani

let name = "shivani";
console.log(name.padStart(10, "-").padEnd(15, "*")); //---shivani*****


*/
//-----------------------------------------------------------------------------
/* 

const person = {
  name: "shivani",
  age: 21,
};
console.log(Object.values(person)); //get all values
console.log(Object.entries(person)); // convert in array pair vise

const arrobj = Object.entries(person);
console.log(Object.fromEntries(arrobj)); //convert in object back from array


*/
//------------------------------------------------------------------------

/* 
const person = {
  name: "shivani",
  age: 21,
};

const sPerson = {
  ...person, //same as person
};

console.log(person);
console.log(sPerson);
 */

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991 + 12 ); //wrong output
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);

//nullish coalescing operator -> The nullish coalescing operator is an alternative to || which returns the right-side expression if the left-side is null or undefined.

//ex.
// const foo = null ?? 'default string';
// console.log(foo);

//---------------------------------------------------------------------------------------------------------------

// ES2014

//1
// x = 3.14;
// console.log(x);   //perfect run

//2
// "use strict";
// x = 3.14;
// console.log(x);    //error

//3
// "use strict";
// const x = 3.14;
// console.log(x);   //perfect run
