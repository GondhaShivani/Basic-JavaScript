/*




                                        5️⃣ Hoisting in JavaScript 





 */
// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where "variables and functions declarations" are moved to the top of their scope before the code execute.

// For Example 👇

// console.log(myName);
// var myName;
// myName = "thapa";

// // How it will be in output during creation phase

// 1: var myName; //by default value undefined
// 2: console.log(myName);
// 3: myName = "thapa";

//if we write let in place of var it will give error -> u can not access myName before Initilization.
// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword
// // instead of var. (The other difference is that variables declared
// // with let are local to the surrounding block, not the entire function.)

/*




                6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 




 */

// // The scope chain is used to resolve the value of variable names in JS.

// // scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code.

// // At the top, we have the Global Scope, which is the window Object in the browser.

// // Lexical Scoping means Now, the inner function can get access to their parent functions variables But the vice-versa is not true.

// // For Example 👇
/* 


let a = "Hello guys !! "; // global scope

//parent func
const first = () => {
  let b = " How are you?";

  //child func
  const second = () => {
    let c = " Hii, I am fine thank you🙏";
    console.log(`${a + b + c}`);
  };
  second();
  //console.log(a + b + c); //I can't use C
};

first();



*/

/*




                  // // 7️⃣ What is Closures in JavaScript 🤔 




 */

// // A closure is the combination of a function bundled together (enclosed) with references
// // to its surrounding state (the lexical environment).

// // In other words, a closure gives you
// // access to an outer function’s scope from an inner function.

// // In JavaScript, closures are created every time when a function is created, at function creation time.

// // For Example 👇
/* 



const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`the sum of the two no is ${sum}`);
  };
  innerFun();
};
outerFun(5);


*/
// // it same like lexical scoping

// // One more Example 👇
/* 



const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`the sum of the two no is ${sum}`);
  };
  return innerFun;
};
let checkClousure = outerFun(5);
console.log(checkClousure()); //calling
console.dir(checkClousure); //cl.dir -> to see all the properties of a specified JavaScript object in the console without converting to JSON format.
 


*/
/*

"use strict"

let x = "vinod";
console.log(x);


*/
/*





-------------------------------// // Difference between Asynchronous & synchronous JavaScript




*/

// // 6️⃣:  -------------------------------------- Synchronous JavaScript Prog

// 1work = 10min
// 2work = 5s
// in Synchronous 2work have to wi8
//one  by one work
/*


const fun2 = () => {
  console.log(`Function 2 is called`);
};

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
};

fun1();
 

*/
// ---------------------------------------------Asynchronous JavaScript Prog

//working simultaneously
/* 



const fun2 = () => {
  setTimeout(() => {
    console.log(`Function 2️⃣  is called after 2 second.`);
  }, 2000);
};

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
};

fun1(); 



*/
/*




-----------------------------------------------------Function currying




*/

//It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

//We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. Hopefully, the function that receives the last argument returns the expected result.
/*


function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(6));
 

*/
//OR
/* 


const calculateVolume = (length) => (breadth) => (height) =>
  console.log(length * breadth * height);
calculateVolume(4)(5)(6);



*/
/*





                                                            // // 8️⃣: CallBack Hell





*/
/* 


setTimeout(() => {
  console.log(`1️⃣  works is done`);
  setTimeout(() => {
    console.log(`2️⃣  works is done`);
    setTimeout(() => {
      console.log(`3️⃣  works is done`);
      setTimeout(() => {
        console.log(`4️⃣  works is done`);
        setTimeout(() => {
          console.log(`5️⃣  works is done`);
          setTimeout(() => {
            console.log(`6️⃣  works is done`);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 
//callback hell se bachne ke liye hum PROMISES use karte he................

*/
/*




------------------------------------------------------------------------------------------------
                                      JSON
------------------------------------------------------------------------------------------------




*/

// // 👉 JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object); //{"key_1":"some text","key_2":true,"key_3":5}

// console.log(object_as_string);

// typeof(object_as_string); //"string"

// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  //{key_1: "some text", key_2: true, key_3: 5}

// typeof(object_as_string_as_object);  //"object"

/*


-----------------------------------------------------------------------------------------------
---------------------------------------------PROMISES
------------------------------------------------------------------------------------------------



*/
/* 


Promises:
2 condition : fullfiled or reject
in most of cases we consumed the API not create.
 

*/
