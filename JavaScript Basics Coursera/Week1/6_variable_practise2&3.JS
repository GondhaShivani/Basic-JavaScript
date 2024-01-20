/*

JS is a loosly type language.

*/

//------------------------------------------------ex1
var notnum = "5";  //it stores as a string.
var newnum1 = 10;    //it is real number.
var newnum2 = 20;    //it is real number.

// in JS "+" will play double role.
// 1. in between numbers it will add numbers together.
// 2. if one is string then concate both and make a single string.

var output1 = notnum + newnum1
console.log(output1 + " is typeof " + typeof(output1));  //510 - its a string 
//-> it's concatnation, not a arithmatic summation bcz both oprand type is different. 

var output2 = notnum + newnum2
console.log(output2 + " is typeof " + typeof(output2));  // 520 -> also a string

var output3 = newnum1 + newnum2
console.log(output3 + " is typeof " + typeof(output3)); //30 -> a number in output.

var undefinedVariable;
console.log(typeof(undefinedVariable));  //undefined

var numAsString = "20";
console.log(typeof(numAsString)); //string

var nothingAtAll = null;
console.log(typeof(nothingAtAll)); //object

var emptyString = " ";
console.log(typeof(emptyString));  //string