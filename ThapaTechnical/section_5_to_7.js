/*

//--------------------------------------functions in js

//normal code
var c = 90;
var d = 10;
var sum1 = c + d;
console.log(`sum1 call : ${sum1}`);

//using function call

function sum2() {
  var a = 10;
  var b = 90;
  var total2 = a + b;
  console.log(`sum2 call : ${total2}`);
}
sum2();

//with parameter

function sum3(aa, bb) {  //aa, bb = func parameters
  var total3 = aa + bb;
  console.log(`sum3 call : ${total3}`);
}
sum3(10, 90);  //10, 90 = func arguments





*/
/*






//---------------------------------------------------challenge 7
//function arguments vs function parameters

//function paramteres -> listed in function definition
//function arguments -> real value passed to the function -> listed in function call




*/
/*




//-------------------------------------------------interview que 4
//why functions?

//can reuse Code.
//can use the same code many times with different arguments.

//DRY concept -> do not repeat yourself




*/
/*




//--------------------------------------------function expression

//create a function and put it into the variable
//we can return something and store it in the funExp.

function sum(a, b) {
  return (total = a + b);
}

var funExp = sum(12, 8);
console.log(funExp);




*/

//---------------------------------------------Anonymous function

/* 


//this is anonymous function
function (a,b){
    return total = a+b;
} 


*/
/*


//this is anonymous function Expression
var funExp = function (a, b) {
  return (total = a + b);
};
console.log(funExp(4, 3));


*/
/*


//returns whole function body
var funExp = function (a, b) {
  return (total = a + b);
};
funExp(4, 3);
console.log("Sum of a and b is " + funExp);


*/
/*


//for output 1st assign funExp into a var then print var.
var funExp = function (a, b) {
  return (total = a + b);
};
var sum = funExp(4, 3);
console.log("Sum of a and b is " + sum);


*/

/*




-----------------------------------------------History

1996 - JS created

1997 - Submitted to ECMA International for standardization which resulted in ECMAScript.
        [for official popularity]

ECMAScript -> Annual update in JS (every year update features)

        
2016 - ES7
2017 - ES8
2018 - ES9
2019 - ES10
2020 - ES11





*/
/*






2015 - annual releases of ECMAScript (ES6)(ECMAScript 2015)  
        [from 1997 to 2015 JS updated by 6 times]
        1. Let and const
        2. template strings
        3. default arguments
        4. destructering
        5. object properties
        6. arrow functions
        7. rest operator
        8. spread operator




*/

//Let vs const vs VAR

//Difference ----------------------------- 1 ------------------ scope
//var = function scope
//let const = block scope

//Difference ----------------------------- 2 --------------- const value cannot change
//____________ex-1  var
// var myName = "shivani";
// console.log(myName); //shivani

// myName = "Shivani Gondha";
// console.log(myName); //Shivani Gondha

//while declaring var is used then easily can change value of that variable.

//_____________ex2  Let
// let myName = "shivani";
// console.log(myName); //shivani

// myName = "Shivani Gondha";
// console.log(myName); //Shivani Gondha

//____________ex3 const
//can not change once define.
//mostly used in functions.

// const myName = "shivani";
// console.log(myName);

// myName = "Shivani Gondha";
// console.log(myName);

//Difference ----------------------------- 3 --------------- accessible or not
/* 
// ______________1
//var used anywhere in the function 
function Biodata() {
  var myFirstName = "Shivani";
  console.log(myFirstName);

  if (true) {
    var myLastName = "Gondha";
    console.log("inner " + myFirstName); //Shivani -> var function scope
    console.log("inner " + myLastName); //Gondha -> var function scope
  }

  console.log("innerOuter " + myLastName); //Gondha -> var function scope
}
console.log("Outer " + myFirstName); //ReferenceError : myFirstName is not defined
//var function scope
Biodata(); */

/* 
// ___________________2
//let - can access outer block variable in inner block. but
//let - cannot access inner block variable in outer block.
//in example -> function - outerblock, if - innerblock.

function Biodata() {
  let myFirstName = "Shivani"; //available in function block so accessable in if block
  console.log(myFirstName); //Shivani

  if (true) {
    let myLastName = "Gondha"; //available in if block - can't access outside of if
    console.log("inner " + myFirstName); //inner Shivani -> var function scope
    console.log("inner " + myLastName); //inner Gondha -> var function scope
  }

  console.log("innerOuter " + myLastName); //ReferenceError : myLastName is not defined
  //let block scope
}
Biodata();
 */

/* 
// ___________________3
//const - same as let - block scope
//const - can access outer block variable in inner block. but
//const - cannot access inner block variable in outer block.
//in example -> function - outerblock, if - innerblock.

function Biodata() {
  const myFirstName = "Shivani"; //available in function block so accessable in if block
  console.log(myFirstName); //Shivani

  if (true) {
    const myLastName = "Gondha"; //available in if block - can't access outside of if
    console.log("inner " + myFirstName); //inner Shivani -> var function scope
    console.log("inner " + myLastName); //inner Gondha -> var function scope
  }

  console.log("innerOuter " + myLastName); //ReferenceError : myLastName is not defined
  //let block scope
}
Biodata();





*/
/*






//         2_____________________Template Literals (Template String) ( `` )
for (let i = 1; i < 10; i++) {
  //let block scope
  let n = 10; // let block scope
  console.log(`${n} * ${i} = ${n * i}`);
}





*/

//          3________________________________Default Arguments

//function call - argument
//function definition - parameter

/* 

//with both arguments
function mult(a, b) {
  return a * b;
}
console.log(mult(5, 10));  //50

*/
/*

//with one arguments
function mult(a, b) {
  return a * b;
}
console.log(mult(5)); //NaN


*/
/*

//call with one argument and pass another default parameter
function mult(a, b = "4") {
  return a * b;
}
console.log(mult(5)); //20

*/

/* 

//1
function add1(a = 3, b = 3) {
  return a + b;
}
console.log(add1()); //6

//2
function add2(a = 2, b = 3) {
  return a + b;
}
console.log(add2(5)); //a=5 and b=3 -> 8

//3
function add3(a = 2, b = 3) {
  return a + b;
}
console.log(add3(4)); //a=4 and b=3 -> 7

//4
function add(a = 2, b = 3) {
  return a + b;
}
console.log(add(5, 10)); //15





*/
/*





//____________________________________Arrow Function

//______________ex1
//normal func
console.log(mul1());

function mul1() {
  let a = 2,
    b = 3;
  return `multiplication of ${a} & ${b} is ${a * b}`;
}

//arrow function

//___________ex2

//console.log(mul2());
//you can not call arrow func before func initilization.
const mul2 = () => {
  let a = 2,
    b = 3;
  return `multiplication of ${a} & ${b} is ${a * b}`;
};
console.log(mul2());

//___________ex3
const mul3 = () => {
  return `multiplication of ${(a = 2)} & ${(b = 3)} is ${(a = 2) * (b = 3)}`;
};
console.log(mul3());
//if we have one line of code only then no need of return keyword and {brackets}. -> ex4

//_____________ex4
const mul4 = () =>
  `multiplication of ${(a = 2)} & ${(b = 3)} is ${(a = 2) * (b = 3)}`;
console.log(mul3());




*/
/*



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++ Section 6 ++++++++++++++++++++++++++++++
//+++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



*/
/* 
//ex1
var Family = new Array(); //optional
var Family = ["papa", "mma", "sis"];
console.log(Family[1]);





*/
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __ Traversal __ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/*
var Family = ["papa", "mma", "sis"];


console.log(Family[0]); //papa
console.log(Family[1]); //mma
console.log(Family[2]); //sis
console.log(Family[Family.length - 1]); //for last element //sis
console.log(Family[-1]); //cannot use negative index in js
console.log(Family.length); //length of array 3
 



*/
/* 





//_________________________________________for loop__________________________________________
for (let i = 0; i < Family.length; i++) {
  console.log(Family[i]); //papa mma sis
}

//_____________________for in loop -- provides index number of elements______________________
for (let members in Family) {
  console.log(members); // 0 1 2
}

//_________________________for of loop -- provides elements of array_________________________
for (let elements of Family) {
  console.log(elements); //papa mma sis
}

//__________________forEach loop -- combination of for in & for of loop____________________
//1
Family.forEach(function (element, index, array) {
  console.log(
    `element : ${element} ->> index : ${index} ->> from Array : ${array}`
  );
});
//we can not use break statement in forEach loop - once it starts it traverse till last element.

//2
//Family.forEach( (parameter) => {body code} );
Family.forEach((element, index, array) => {
  console.log(element);
});









 */

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __ searching and filter __ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

var array = ["a", "b", "c", "d", "e", "f", "g", "h", "a", "b"];
/* 

//1
//indexOf -> returns first least index of element, -1 if element not exist
//starting from 0th index - go forward
console.log(array.indexOf("a")); //0
console.log(array.indexOf("s")); //-1
console.log(array.indexOf("d")); //3
console.log(array.indexOf("c", 3)); //-1 - find c search from 3
console.log(array.indexOf("a", 3)); //8 - find a search from 3




 */
/* 




//2
//lastIndexOf -> returns last higher index of element, -1 if element not exist
//starting from last index - go backword
console.log(array.lastIndexOf("a")); //8
console.log(array.lastIndexOf("s")); //-1
console.log(array.lastIndexOf("d")); //3

console.log(array.includes("a")); //true
console.log(array.includes("s")); //false

//only foreword search
console.log(array.includes("a", 0)); //search a from 0 -> true
console.log(array.includes("a", 1)); //search a from 1 -> true
console.log(array.includes("c", 4)); //search c from 4 -> false







 */

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __ CRUD operations __ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/* 


//  1 ________________________--Push method --___________________________________


const fruits = ["apple", "banana", "cherry"];

const count1 = fruits.push("guava"); //added at last
console.log(fruits);
//push method returns new length of array
console.log(`length of array : ${count1}`); //4

//add more than one element
const count2 = fruits.push("fruit1", "fruit2", "fruit3");
console.log(fruits);
console.log(`length of array : ${count2}`);





 */
/* 



// 2  ________________________--unshift method --___________________________________


const fruits = ["apple", "banana", "cherry"];

const count1 = fruits.unshift("guava"); //added at first
console.log(fruits);
//unshift method returns new length of array
console.log(`length of array : ${count1}`); //4

//add more than one element
const count2 = fruits.unshift("fruit1", "fruit2", "fruit3"); //added at first
console.log(fruits);
console.log(`length of array : ${count2}`);


//ex 2
const numbers = [1, 2, 3, 5];
numbers.unshift(4, 6);
console.log(numbers);





 */
/* 



// 3  ________________________--pop method --___________________________________



//remove from last element and changes length of array

const fruits = ["apple", "banana", "cherry"];

console.log(fruits);
console.log(fruits.pop()); //remove from last
console.log(fruits);


 */

/* 




// 4  ________________________--shift method --___________________________________


const fruits = ["apple", "banana", "cherry", "fruit1", "fruit2"];

fruits.shift(); //remove from first
console.log(fruits);





 */

//  ______________________challenge 10   (((" splice method ")))_____________________________

//adds and/or removes elements from array
//.splice(startNo(index) , deletecountNo , string)

//const months = ["jan", "march", "april", "june", "july"];

/* 
//               sol-1 add dec at end of array


const months = ["jan", "march", "april", "june", "july"];

const newMonth1 = months.splice(5, 0, "dec"); //add dec at 5th index
console.log(months); 
*/

/* 
//dont know which is last index then 5 = array.length.

const months = ["jan", "march", "april", "june", "july"];


const newMonth2 = months.splice(months.length, 0, "dec"); //add dec at 5th index
console.log(months);


 */
/* 


//                sol -2   what is return value of splice method

// splice method basically used for delete
// so this method shows that how many element is deleting.

const months = ["jan", "march", "april", "june", "july"];

const newMonth1 = months.splice(5, 0, "dec"); //add dec at 5th index
console.log(months);
console.log(newMonth1); //empty array   -  no element deleting 


*/

//                sol - 3   update march to MARCH

// const months = ["jan", "march", "april", "june", "july"];

/*

//const updateMonth = months.splice(start from 1,delete one element from index 1,add this new string);

const updateMonth = months.splice(1, 1, "MARCH");

console.log(months); 



*/
/* 





//now if 50 elemets are there we can not count then pass index
//so...

const index = months.indexOf("march"); //found
//const index = months.indexOf("dec"); //not found

if (index == -1) {
  console.log("data not found");
} else {
  const updateMonth = months.splice(index, 1, "MARCH");
  console.log(months);
}





 */

/* 


//                sol - 4   delete june from array

const index = months.indexOf("june"); //found

if (index == -1) {
  console.log("june not found");
} else {
  console.log(`found at index : ${index}`);
  const deleteMonth = months.splice(index, 1); //start from index //delete 1 element from index
  console.log(`deleted month : ${deleteMonth}`);
  console.log(months);
}



 */

//   ________________________--Map method --___________________________________

//map method always returns a array.
//returns new array containing the results of calling a function on every elemnen in array.

/* 




console.log("-----------------Map Method---------------------");
const array1 = [1, 2, 45, 20, 4];
let newArray = array1.map((curElement, index, arr) => {
  return `current Element is : ${curElement} on index : ${index},  of array : ${arr}`;
});
console.log(newArray);
//it returns new array without mutating<change> in a main array

console.log("-----------------forEach Method---------------------");
const array2 = [1, 2, 45, 20, 4];
let newArray2 = array2.forEach((curElement, index, arr) => {
  return `current Element is : ${curElement} on index : ${index},  of array : ${arr}`;
});
console.log(newArray2); //it returns undefined




 */

/* 

____________________________________________________________________________________
----------------------------------------Note----------------------------------------
____________________________________________________________________________________
you can use other methods such as filter, reduce forward to map method. <chainable>
but can't in the forEach because it returns undefined

 */

//  ______________________challenge   (((" map reduce filter ")))_________________________

/* 


//__________________sol 1 -> find square root of each element in array
let arr = [25, 36, 49, 64, 81];

let arrSqurRoot = arr.map((curElm, index, arr) => {
  return Math.sqrt(curElm);
});

console.log(arrSqurRoot); 



*/
/*




//____________sol 2  - MULTIPLY each elm by 2 and return only those elm which are greater 10.
let arr = [2, 36, 49, 64, 81];

let arrSqurRoot = arr
  .map((curElm) => {
    return curElm * 2;
  })
  .filter((curElm) => {
    return curElm > 10;
  });

console.log(arrSqurRoot);




 */
//   ______________________________--reduce method --___________________________________

//flatten an array
//convert 2d, 3d array into 1d array

//the reduce( ) method executes a reducer func (that you provide) on each element of the array, resulting in single output Value.
//reducer func takes four arguments:

//1. accumulator - sum of all - added one by one
//2. current value
//3. current index
//4. source array

//Ex. logic for sum ->
//curElement = 5 , accumulator = 5 , sum = 5
//curElement = 6 , accumulator = 5+6 , sum = 11
//curElement = 2 , accumulator = 11+2 , sum = 13

//code:
// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curElement, index, arr) => {
//   return (accumulator += curElement);
// });

// console.log(`sum = ${sum}`);

//   ______________________________-- flatten array --___________________________________
//converting 2d or 3d array into 1d array.

/*
//ex1
let arr1 = [
  ["zone1", "zone2", "zone22"],
  ["zone3", "zone4"],
  ["zone5", "zone6"],
  ["zone7", "zone8"],
];

let flatArray = arr2.reduce((accumulator, curElement) => {
  return accumulator.concat(curElement);
});

//OR

console.log(arr1.flat());

*/
/*

//ex2
let arr2 = [
  ["zone1", "zone2", "zone22"],
  ["zone3", "zone4"],
  ["zone5", "zone6"],
  ["zone7", "zone8", ["zone11", "zone222", "zone33"]],
];

//["zone11", "zone222", "zone33"] nested array - cannot flatten this array into one dim.
let flatArray = arr2.reduce((accumulator, curElement) => {
  return accumulator.concat(curElement);
});

console.log(flatArray);

//OR

console.log(arr1.flat(2));

//-----------if don't know how many array under array then...
console.log(arr1.flat(infinity)); 


*/

//for solve this problem we have one method in string.

/*











*/

//_____________________________________________________________________________________________
//----------------------------------------section -- 7  ---------------------------------------
//_____________________________________________________________________________________________

//_____________________________________________________________________________________________
//--------------------------------------  Strings in JS  --------------------------------------
//_____________________________________________________________________________________________

/*











// _____________________________________________________________________________________________
// ----------------------------------- {1} --- Escape Character --------------------------------
// _____________________________________________________________________________________________

//Escape Character -> / -> known as special char in string chars.
// '/ single quote, "/ double quote, // backslash
// string is zero or more chars written inside the quotes.
// js string used for storing and manipulating text.
// string can be created as primitive, from string literels or as objects, using the string constructor




let name = "shivani";

//below both are same....
// let newName = new String("Shivu");
let newName = "Shivu";

console.log(name);
console.log(newName);

console.log(`${name} -> length = ${newName.length}`);

let fullname = "Shivani Gondha";
console.log(fullname.length); //also count space = 14

//let sentence = "Jay "Shree" Krishna"; //syntex error
//let sentence = "Jay \"Shree\" Krishna"; // can write using backslash also.
let sentence = 'Jay "Shree" Krishna';
let sentence2 = "Jay 'Shree' Krishna";

console.log(sentence);
console.log(sentence2);











*/
// _____________________________________________________________________________________________
// ----------------- {2} --- Finding a string in a string (return - position)--------------------
// _____________________________________________________________________________________________

//---------------------------indexOf

//forward search
//the indexOf method returns the index of 1st occurance of a specified text in a string.
//indexOf(searchValue, [, Starting from])
//index starting from 0. // space also counted.

/* 
const myName = "Gondha Shivani Mahendrabhai";
console.log(myName.indexOf("shivani")); // -1 -> indexOf method = case sensitive S capital small differ.
console.log(myName.indexOf("Gondha")); //0
console.log(myName.indexOf("Shivani")); // 7
console.log(myName.indexOf("Shiv", 3)); //7
console.log(myName.indexOf("Shiv", 8)); //-1

*/
/*

//-----------------------------lastIndexOf

//backward search
//the lastIndexOf method returns the index of last occurance of a specified text in a string.
//lastIndexOf(searchValue, [fromIndex])
//index starting from 0. // spaces also counted.

const myName = "Gondha Shivani Mahendrabhai";
console.log(myName.lastIndexOf("shivani")); //-1 ->lastIndexOf method = casesensitive S capital small differ.
console.log(myName.lastIndexOf("Gondha")); //0
console.log(myName.lastIndexOf("Shivani")); // 7
console.log(myName.lastIndexOf("Shiv", 3)); // -1
console.log(myName.lastIndexOf("Shiv", 8)); // 7












*/

// _____________________________________________________________________________________________
// ------------ {3} --- searching for a string in a string (return - position)------------------
// _____________________________________________________________________________________________
/* 



//search method can not contain  -> (2nd start argument)

const name = "shivani Gondha";
const sname0 = name.search("gondha"); //-1
console.log(sname0);
const sname1 = name.search("ni Go"); //5
console.log(sname1);
const sname2 = name.search(" Go"); //7
console.log(sname2);
 













*/
// _____________________________________________________________________________________________
// --------------------------- {4} --- Extracting string parts-----------------------------------
// _____________________________________________________________________________________________

// 3 methods for extracting a part of a string

// 1. slice(start, end)             //in array = splice  //in string = slice
// 2. substring(start, end)
// 3. substr(start, length)

//------------------------------------------slice-------------------------------------------------------

// 1. slice method extracts a part of a string and return extracted part in a new string.
// slice(start, end)   -->  start = inclusive, end = exclusive

/* 
//ex

var str = "Apple, Banana, Kiwi";
//want kiwi in responce
let res1 = str.slice(15, 19);
console.log(res1); //kiwi

let res2 = str.slice(7, -2);
console.log(res2); //Banana, Ki
//start = 7 = B - inclusive -> start with B
//end = -2 = w - exclusive -> end at i

let res3 = str.slice(7); // only starting index
console.log(res3);



 */

/* 


//-------------------------------------------Challenge 11------------------------------------------------------
//display only 280 chars of string

let actualText =
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

console.log(actualText);

console.log(" ");

let totalLength = actualText.length;
console.log(`Text length = ${totalLength}`);

console.log(" ");

console.log("Now Print first 280 char");
console.log(" ");
let myText = actualText.slice(0, 280);
//start from 0 - 0 included
//end at 280 - 280 excluded
// include 0-279 as 280 chars
console.log(myText);

console.log(" ");

let shortLength = myText.length;

console.log(" ");
console.log(`Limited Text length = ${shortLength}`);
console.log(" ");

//ex2  //end index not given
let actualText2 = myText.slice(6); //printing starting from 6th char upto end
console.log(actualText2);
 

*/

//-----------------------------------------subString()----------------------------------------------------
//substring is similar to Slice().
//difference - substring cannot accept negative indexes.
//if we give negative value then chars are counting from 0th position.
/* 

Ex.. 1
var str = "Apple, Banana, Kiwi";
var res = str.substring(0, 5);
console.log(res); //Apple

Ex.. 2
var res2 = str.substring(8, -2); //we want start 8 end -2
//in substring negative not allowed
//so start from 0 and end at 8
console.log(res2); // (Apple, B)

Ex.. 3
var res3 = str.substring(-2, 3); //start from 0 go to 3
console.log(res3); // App

Ex.. 4
var res4 = str.substring(-2, -5);
console.log(res4);  // start 0 end 0 -> output : empty
 */
/* 
//---------------------------------------------------substr-----------------------------------------------

//similar to slice
//difference is that the second parameter specifies the length of the extracted part.
//if you want to display from last of string then u can easily use substr by giving length.

//ex1
let text = "Apple, banana, kiwi";
let res = text.substr(0, 4);
console.log(res); //Appl

//ex2
let text2 = "Apple, banana, kiwi";
let res2 = text2.substr(-4);
console.log(res2); //4 indicates length, - indicate starting from last
 





*/

// _____________________________________________________________________________________________
// --------------------------- {5} --- Replacing string content-----------------------------------
// _____________________________________________________________________________________________
//1. replace method does not change in main string it returns new string.
//2. bydeafult method only replaces the 1st match in the string.
//3. case sensitive
//argument : (searchfor, replacewith)
/* 


//ex1
let aboutMe = "My name is Shivani Gondha";
let replaceData = aboutMe.replace("name is", "self");
console.log(replaceData);

//ex2
let about = "my name is shivani name";
let replace = about.replace("name", "Name");
console.log(replace); //only change 1st - name --> 1st - match
 

*/
// _____________________________________________________________________________________________
// --------------------------- {6} --- Extracting string characters-----------------------------
// ____________________________________________________________________________________________

//3 methods
//1. charAT(position)
//2. charCodeAt(position)
//3. Property access []

/* 



//--------------------------------------------charAt-----------------------------------------------

let greet = "hello";
console.log(greet.charAt(0)); //h


//--------------------------------------------charCodeAt-----------------------------------------------

//return unicode value
//return UTF-16 code
// an int between 0 and 65535
//the unicode standards provide a unique number for every char.

let greet2 = "hello hii";
console.log(greet2.charCodeAt(0)); //104
console.log(greet2.charCodeAt(6)); //104
console.log(greet2.charCodeAt(3)); //108
console.log(" ");


//---------------------------------------------Challenge 12-------------------------------------------------

//return unicode of last char.
let str = "Hello World";
let lastchar = str.length - 1;
console.log(str.charCodeAt(lastchar)); //100


//---------------------------------------------Property access------------------------------------------------
//ES5 (2009) allows property access [ ] on string

var str = "Hello World";
console.log(str[0]); //H
console.log(str[2]); //l



*/

// _____________________________________________________________________________________________
// --------------------------- {7} --- other useful methods-----------------------------------
// _____________________________________________________________________________________________

//--------------------------Uppercase() //lowercase()
/* 
let Name = "Shivani";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
 */

//------------------------concat()
/* 
let fname = "shivani";
let lname = "gondha";
console.log(fname + lname); //shivanigondha
console.log(fname.concat(lname)); //shivanigondha
console.log(fname.concat(" " + lname)); //shivani gondha
console.log(fname.concat(" ", lname)); //shivani gondha
console.log(`${fname} ${lname}`); //shivani gondha
 */

//-------------------trim() method removes whitespace from both side not from middle
/* 
let myName = "            Heellloooo            Shivani               ";
console.log(myName);
console.log(myName.trim()); 
*/

//split() converting string to an array

var txt = "a,b,c,d,e";
console.log(txt); //string
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("/"));
