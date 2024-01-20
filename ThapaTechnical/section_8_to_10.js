//-----------------------------------------------------------------
//------------------Date & time in js
//-----------------------------------------------------------------

//js date objects representans a single moment in a time in a platform independent Format.
//date object contain a number that representats milisecond since 1 jan 1970.

//4 ways to create new date obj

/* new Date();
new Date(yaer, month, day, hours, minutes, seconds, miliseconds); //it takes 7 arguments
new Date(miliseconds); //we cant avoid month section
new Date(date string); */

//----------------------------------------------1.
/* 
//date objects are created with the new Date() constructor
let curDate = new Date();
console.log(curDate);  //  2023-12-11T16:42:51.515Z
*/

/* 
// console.log(new Date().toLocaleString()); // 4/1/2024, 12:19:27 am
// console.log(new Date().toString()); // Thu Jan 04 2024 00:20:32 GMT+0530 (India Standard Time)
//console.log(Date.now()); //print milisecond since jan 1st 1970. -> 1704307938368
 */

/* 
//month starts from 0 therefor month jan to dec 0 to 11
//month is compulsory parameter in new Date - minimum 2 args year and month
//new Date(year, month, day, hour, minute, second, milisecond)

var newDate = new Date(2024, 1, 3, 11, 11, 11); //morning 11 am = 11
console.log(newDate.toLocaleString()); // 3/2/2024, 11:11:11 am

var newDate2 = new Date(2024, 1, 3, 23, 11, 11); //night 11 pm = 23
console.log(newDate2.toLocaleString()); // 3/2/2024, 11:11:11 pm

var d = new Date("december, 4, 2023, 11:12:13");
console.log(d); //2023-12-04T05:42:13.000Z
console.log(d.toLocaleString()); // 4/12/2023, 11:12:13 am

//get today's ms
var ms = console.log(Date.now()); //  1704308932851
//get today's date from ms
var d1 = new Date(1704308932851);
console.log(d1.toLocaleString()); //  4/1/2024, 12:38:52 am
 

*/
/* 


//------------------------------------------------dates method

const curDate = new Date();

//get
console.log(curDate.toLocaleString()); //  4/1/2024, 12:45:08 am
console.log(curDate.getFullYear()); //  2024
console.log(curDate.getMonth()); // 0 - jan
console.log(curDate.getDate()); // 4
console.log(curDate.getDay()); // 4 - thursday (( sun-0 mon-1 to sat-6))

const sunday = new Date("december, 31, 2023");
console.log(sunday.getDay()); //0  -> (( sun-0 mon-1 to sat-6))
console.log(" ");

//set
console.log(curDate.toLocaleString()); //  4/1/2024, 12:54:32 am
console.log(curDate.setFullYear(2022, 10, 5)); //1667589872409
console.log(curDate.setMonth(10)); //1667589872409
console.log(curDate.setDate(5)); //1667589872409
 

*/
/* 


//---------------------------------------------time methods

const curTime = new Date();

//get
console.log(curTime.getTime());
console.log(curTime.getHours()); //current day hour
console.log(curTime.getMinutes()); //current hour's - > minute
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

//set
//console.log(curTime.setTime());
console.log(curTime.setHours(5)); //current day hour
console.log(curTime.setMinutes(5)); //current hour's - > minute
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds());
 

*/

/* //---------------------------------------------------challenge time
var d = new Date().toLocaleDateString(); //only date
var t = new Date().toLocaleTimeString(); //only time
var dt = new Date().toLocaleString(); //both
console.log(d + "   " + t + "   " + dt); //  4/1/2024   6:03:55 pm   4/1/2024, 6:03:55 pm
*/
/*










----------------------------------------section - 9 Math object












*/

/* 


//pi
console.log(Math.PI);

//round
var num = 10.34567;
var num2 = 10.666;
var num3 = 10.5467;
console.log(Math.round(num)); //10    //after decimal <5
console.log(Math.round(num2)); //11   //after decimal >5
console.log(Math.round(num3)); //11   //after decimal =5

//pow
console.log(Math.pow(2, 3)); //8
console.log(2 ** 3); //8

//sqrt
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(43)); //6.557438524302

//abs (positive)
console.log(Math.abs(-55.55)); //55.55
console.log(4 - 6); //-2
console.log(Math.abs(4 - 6)); //2

//ceil ( decimal ni pela nuu + 1 )( not round off rule )
console.log(Math.ceil(22.3)); //23
console.log(Math.ceil(87.63)); //88

//floor ( decimal ni pela nuu )( not round off rule )
console.log(Math.floor(22.3)); //22
console.log(Math.floor(87.63)); //87

//min max
console.log(Math.min(2, 6, -2)); //-2
console.log(Math.max(2, 6, -2)); //6

//random num between 0 and 1 -> 0inclusive 1exclusive
console.log(Math.random()); //0.7910250934285075
console.log(Math.round(Math.random())); //1 //round off
console.log(Math.floor(Math.random())); //0 //decimal ni pela nu
console.log(Math.ceil(Math.random())); //0 //decimal ni pela nu + 1
//*10 then between 0 to 9
console.log(Math.random() * 10); //8.751502013618069
console.log(Math.floor(Math.random() * 10)); //6 //decimal ni pela nu

//trunc - return int part of a number
console.log(Math.trunc(33.4)); //33
console.log(Math.trunc(-33.4)); //-33


 */

//-------------------------------Note----------------------------------
// if the argument is positive number -> trunc equvalent to floor
// if the argument is negative number -> trunc equvalent to ceil
//-------------------------------Note----------------------------------

/*










--------------------------------section - 10 Dom in JS










*/

//window - global object or container
//document - used only for render HTML of the page or website

/* 
|------------------------------|
|               -------------  |   
|               |           |  |
|  Womdow       |Document   |  |
|               |           |  |
|               ------------   |
|----------------------------- |


*/
//-------------------------------------------------------------------------
//---------------------------1. window vs document----------------------
//-----------------------------------------------------------------------
//------------------------------------Img1

// 1️⃣ Window is the main container or we can say the global Object and any operations related to entire browser window can be a part of window object.
// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object

//----------------------------------------------------------------------------------------

// 2️⃣ All the members like objects, methods or properties.
// If they are the part of window object then we do not refer
// the window object. Since window is the global object
// so you do not have to write down window.
// - it will be figured out by the runtime.
/* 
//example
//google website -> inspect -> console
//in window object if url property is included then no need to refer window object 
window.location.href = 'chrome://new-tab-page/'
location.href = 'chrome://new-tab-page/'
same output

document.getElementById(location.href)
null //bcz document don't include data of url

html components related modification - go through document
overall modification settimeout() setinterval() - go through window
 */

// 2️⃣ in the DOM we need to refer the document, if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()

//-----------------------------------------------------------------------------------

// 3️⃣ Window has methods, properties and object. ex setTimeout() or setInterval() are the methods
// where as Document is the object of the Window and It also has a screen object with properties describing the physical display.

// Now, I know you have a doubt like we have seen the methods and object of the global object that is window.
//But What about the properties of the Window Object 🤔

// so example of window object properties are innerHeight, innerWidth and there are many more

//-------------------------------------------------------------------------------------------

// ************** DOM vs BOM ******************* //img3

// 👉 The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g. document and all traversal you would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";

// 👉 The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some others that vary by browser). OR
// In simple meaning all the Window operations which comes under BOM are performed usign BOM

//---------------------------------------------Example of History object

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document, but represent pure browser methods of communicating with the user.

/* 
//in chrome ->
alert(location.href); // shows current URL
if (confirm("Want to Visit ThapaTechnical?")) {
  location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
}
 */

//HTML is the root of Document

//section10_1.html -> example ->img2 output
//if want to check that any element has childnodes or not -> method
//document.body.haschildnodes -> true if has -> false else

//img2
//parent - child
//img3

//section10_2.html
//getElementById, ClassName, TagName, Name
/* 



//--------------------------------------------interview que.
difference between document.getElementById and document.querySelector
1. document.getElementById
syntax : document.getElementById(id)
- returns a reference to the element by its id.
- if the element with specified id is not in the document then will return null. 

2. document.querySelector
syntax : document.querySelector(selector)
-returns the 1st element within the document that matches the specified group of selectors or return null if no matches are found. 

document.getElementById is faster then querySelector bcz it supports mostly in all browser.
but we can access class attributes using query but can not with getElementByID.

*/
