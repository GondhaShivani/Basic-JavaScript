/* 
document.querySelector('CSS selector');
document.querySelectorAll('CSS selector'); 
class : .className
id : #idName
tag : tagName
*/

//---------------------------------------------------------------------------------"1" querySelector
var element1 = document.querySelector("#header").innerHTML;
console.log(element1);
//output: <h1>Hello Everyone</h1>


//--------------------------------------------------------------------------------"2" querySelector
var element2 = document.querySelector("#header").getAttribute("class");
console.log(element2);
//output: abc


//----------------------------------------------------------------------------"3" querySelector + class
var element3 = document.querySelector(".list");
console.log(element3);
/* 
output: <ul class="list">
            <li></li>
            <li></li>
        </ul>
- only return 1st match of list class.
*/


//--------------------------------------------------------------------------"4" getElementByClassName
var element4 = document.getElementsByClassName("list");
console.log(element4);
/* 
output: ul.list
        p.list 
- return an array of every list class attribute.
*/


//-----------------------------------------------------------------------------"5" querySelector
var element5 = document.querySelectorAll(".list");
console.log(element5); 
/* 
output: ul.list
        p.list 
- return an array of every list class attribute.
*/


//-------------------------------------------------------------------------"6" querySelectorAll with index
var element6 = document.querySelectorAll(".list")[1];
console.log(element6);
//output: <p class="list">Lorem...</p>


//---------------------------------------------------------------------"7" querySelectorAll with index .innerHTML
var element7 = document.querySelectorAll(".list")[1].innerHTML;
console.log(element7);
//output: Lorem... (paragraph)


//-----------------------------------------------------------------------------------"8" querySelectorAll
var element8 = document.querySelectorAll("ul");
console.log(element8);
/*
output: ul
        ul.list
        ul
- return an array of every ul tag attribute.
- if there is querySelector inplace of querySelectorAll -> then only 1st <ul>...</ul> will be return.
*/

//------------------------------------------------------------------------------"9" getElementsByTagName
var element9 = document.getElementsByTagName("ul");
console.log(element9);
/*
output: ul
        ul.list
        ul
- return an array of every ul tag attribute.
*/


//------------------------------------------------------------------------"10" querySelectorAll with index
var element10 = document.querySelectorAll("ul")[1].innerHTML;
console.log(element10);
/*
output: <li>Lorem ipsum dolor sit amet. </li>
		<li>Modi nihil in animi necessitatibus.</li>
		<li>Consectetur adipisicing elit.</li>
	    <li>Lorem ipsum dolor sit amet.</li>
  	    <li>Modi nihil in animi dolore natus.</li>
*/


//--------------------------------------------------------------------------------"11" querySelector
var element11 = document.querySelector("#header h1");
console.log(element11);
/*
Output: <h1>Hello Everyone</h1>
*/


//--------------------------------------------------------------------------------"11" querySelectorAll
var element12 = document.querySelectorAll("#header h1");
console.log(element12);
/*
Output: return an array of all h1 tags.
        [ h1, h1 ]
*/


//--------------------------------------------------------------------------------"11" querySelectorAll.innerHTML
var element13 = document.querySelectorAll("#header h1")[1].innerText;
console.log(element13);
/*
Output: Hello Everyoneeeeeee
*/