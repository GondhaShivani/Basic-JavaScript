/*
1


//--------------------------------------Start
console.log("hello world"); 




*/

/*
2



//---------------------------------Values and Vriables
var Myname = "shivani";
console.log(Myname);

var MyAge = 19;
console.log(MyAge);

var iamShivani = true;
iamShivani;
console.log(typeof iamShivani); 






*/

/* 






//-------------------------------------------------------Bug in JS
console.log(9 + "5"); //concatnation not sumetion

//1
console.log(9 - "5"); //substraction - "----------BUG--------"

//2 null variable's type is object    [example -> iamUseless] 




*/

/* 






//--------------Interview 1 ------------------- difference between null and undefined
var iamUseless = null;
console.log(iamUseless); //null  //null value how can be object ???
console.log(typeof iamUseless); //object //((((((((((((((((((((((((2nd JS bug))))))))))))))))))))))))

var iamStandby;
console.log(iamStandby); //undefined (undefined is not only a value it's a datatype also.)
console.log(typeof iamStandby); 






*/

/* 






//-------------------------------Interview 2 ---------------------------- What is NaN
console.log("Hello" - "Shivani"); //if you want to subtract 2 string it will return NaN.
//Initial value of NaN is : Not a Number
//NaN is the property of the global object.
//It is a Variable in global Scope.

var myNumber = 9876543210;
var myName = "shivani";
console.log(isNaN(myNumber));
console.log(isNaN(Myname));

console.log(NaN === NaN); //false
console.log(Number.NaN === NaN); //false
console.log(Number.NaN === Number.NaN); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true






 */

/* 






//------------------------------------------------------Operator and Expression
//+ operator
//20, 3 operand
//[20+3] whole expression

console.log(3 + 10);

//------------------------------------------------------1. assignment operator
//assigns a value to its left operand.
//based on the value of its right operand.
//operator -> (=)
var x = 8;
var z = 9;
var y = 8;
console.log("is it right -> " + x == y); //distigues between + and ==
console.log(`is it right -> ${x == y}`);






 */

/*





//--------------------------------------------------Increment Decrement Operator
// i++ = increment operator (increments and returns the value) before incrementing.
// ++i = increment operator (increments and returns the value) after incrementing.
var num = 16;
console.log(num);
var newNum = num++;
console.log(num);
console.log(newNum);





*/

/* 





//------------------------------------------------------Comperision Operator
// ==
// !=
// >
// >=
// <
// <=

// //---------------------------------------------------------logical Operator
// && logical and (logical conjuction) -> result true -> if all operands true
// || logical or (logical disjuction) -> result true -> if any one operand true
// != logical not (logical complement) -> negation

// //-------------------------------------------------------String Operator
// + concatnation operator





 */
/*






// -----------------------------------------------------------Challenge 2
console.log(10 + "20"); //1020
console.log(9 + "5"); //95
console.log("Java" + "Script"); //JavaScript
console.log(" " + " "); //2 space
console.log(" " + 0); //space0
console.log("Shivani" - "Gondha"); //NaN
console.log(true + true); //2
console.log(true + false); //1
console.log(false + false); //0
console.log(false - true); //-1





*/

/*





// ---------------------------------------------------------------Challenge 4
//sol 1:
console.log(3 ** 3); //9

//sol 2:
// concatnation;

console.log(5 + "shivani");  //5shivani
console.log(5 - "shivani");  //NaN

//sol 3:
var a = 10;
var b = 20;
console.log(`a is ${a} and b is ${b}`); //10 20
var temp;
temp = b;
b = a;
a = c;

console.log(`a is ${a} and b is ${b}`); // 20 10

//sol 4:
var x = 3;
var y = 8;
console.log(`x = ${x} y = ${y}`);
//swap
x = x + y;
y = x - y;
x = x - y;

console.log(`x = ${x} y = ${y}`);





*/
/*






// -------------------------------------------------------Interview Que 4
//difference between == and ===.
// == -> compare value
// === -> compare data type and value

var x = 5; //number
var y = "5"; //string
console.log(x == y); //true - value same

var x = 6; //number
var y = "5"; //string
console.log(x == y); //false - value not same

var x = 5; //number
var y = "5"; //string
console.log(x === y); //false -> data type different even value same

var x = "5"; //string
var y = "6"; //string
console.log(x === y); //false -> data type same but value different

var x = 5; //number
var y = 5; //number
console.log(x === y); //true -> value and data type both same





*/
/*






//----------------------------------------Challenge 5.1
// If else - leap year check

var year = 2200;
if (year % 4 == 0 && year % 100 !== 0) {
  console.log("Yes, Leap Year !!");
} else {
  console.log("No, not a Leap Year !!");
}





*/
/*







//----------------------------------------Challenge 5.2
//What is truthy and falsy value
// in JS ->  there is 5 falsy values
// 1. 0        2. undefined        3. Null         4. " "          5. false**            6. NaN

var score = 0;
if (score == 0) {
  console.log("Lost game");
} else {
  console.log("Won game");
}

var score = 0;
if (null) {
  //null=false therefore print else part.
  console.log("Lost game");
} else {
  console.log("Won game");
}






*/
/*








// ternary - conditional operator -> only one operator in JS that takes 3 operands.
//  syntex =>    variableName = (condition) ? value1 : value2

var age = 170;
console.log(age >= 18 ? "You can vote!!" : "You can't vote!!");






*/
/*





// ----------------------------------else if

var area = "square";
var PI = 3.14,
  r = 3,
  l = 5,
  b = 4;

if (area == "circle") {
  console.log("area of circle is " + PI * r ** 2);
} else if (area == "rectangle") {
  console.log("area of rectangle is " + l * b);
} else if (area == "triangle") {
  console.log("area of triangle is " + (l * b) / 2);
} else {
  console.log("Enter valid data !!");
} 





*/
/*





// ------------------------------    Switch Statement

var area = "rectangle";
var PI = 3.14,
  r = 3,
  l = 5,
  b = 4;

switch (area) {
  case "rectangle":
    console.log("area of rectangle is " + l * b);
    break;
  case "circle":
    console.log("area of circle is " + PI * r ** 2);
    break;
  case "triangle":
    console.log("area of triangle is " + (l * b) / 2);
    break;
  default:
    console.log("Enter valid data !!");
    break;
}







var namee = "dhruvi";

switch (namee) {
  case "shivani":
    console.log("cspit IT1");
    break;
  case "falsi":
    console.log("depstar CE1");
    break;
  case "dhruvi":
    console.log("cspit IT2");
    break;
  case "pranali":
    console.log("depstar it1");
    break;
  default:
    console.log("Enter valid data !!");
    break;
}


*/

/* //------------------------------for loop
for (var i = 1; i <= 10; i++) {
  console.log(i);
} */

/* //----------------------------do while
var i = 1;
do {
  console.log(tableof + " * " + i + " = " + tableof * i);
  i++;
} while (i <= 10); */

/* //-----------------------------while loop
var num = 0;
//block scope -> 1st checks condition then enters into while block if condition is true.
while (num <= 10) {
  console.log(num);
  num++;
} */

//---------------------------------------------Challenge 6

for (var i = 1; i <= 10; i++) {
  var tableof = 8;
  console.log(tableof + " * " + i + " = " + tableof * i);
}



