/* 
we can get this 3 by DOM
- HTML
- Text
- Attribute 
*/

//DOM get methods
//-----------------------------------------------------------------------innerHTML
var element = document.getElementById("header").innerHTML;
console.log(element);
// <h1>Hello Everyone</h1>

//-----------------------------------------------------------------------innerText
var element1 = document.getElementById("header").innerText;
console.log(element1);
//Hello Everyone

var element2 = document.getElementById("content").innerText;
console.log(element2);
//all content without tag

var element3 = document.getElementById("content").innerHTML;
console.log(element3);
//all content with tag and property

//-------------------------------------------------------------------------getAttribute
var element4 = document.getElementById("header").getAttribute("class");
console.log(element4);
//abc

var element5 = document.getElementById("header").getAttribute("id");
console.log(element5);
//header

var element6 = document.getElementById("header").getAttribute("onClick");
console.log(element6);
//xyz()

//-------------------------------------------------------------------------getAttributeNode
var element7 = document.getElementById("header").getAttributeNode("id");
console.log(element7);
//id="header"

//---------------------------------------------------------------------getAttributeNode().value
var element7 = document.getElementById("header").getAttributeNode("id").value;
console.log(element7);
//header

//---------------------------------------------------------------------getAttributeNode().value
var element7 = document.getElementById("header").getAttributeNode("id").value;
console.log(element7);

//----------------------------------------------------------------------------attributes
var element8 = document.getElementById("header").attributes;
console.log(element8);
//return an object of array attributes

//----------------------------------------------------------------------------attributes[]
var element9 = document.getElementById("header").attributes[1];
console.log(element9);
//class="abc"

//----------------------------------------------------------------------------attributes[].value
var element10 = document.getElementById("header").attributes[1].value;
console.log(element10);
//abc

//----------------------------------------------------------------------------attributes[].name
var element11 = document.getElementById("header").attributes[1].name;
console.log(element11);
//class



//DOM set methods

//--------------------------------------------------------------------------old header print
var element12 = document.getElementById("header").innerHTML;
console.log(element12);
//  <h1>Hello Everyone</h1>


//-------------------------------------------------------------------------new header print
//-----------------------------------------------------------------------------innerText
var element13 = document.getElementById("header").innerText = "<h1>Hello Hey !!</h1>";
console.log(element13);
//<h1>Hello Hey!!</h1>  <<--  in document
//innerText cannot apply tags(h1). as it is text will print in document. for tag use innerHTML (as shown below ex.)

//-----------------------------------------------------------------------------innerHTML
var element14 = document.getElementById("header").innerHTML = "<h1>Hello Hey !!</h1>";
console.log(element14);
//Hello Hey !!   <<-- in document


//-----------------------------------------------------------------------setAtrribute(attributeName, value)
document.getElementById("header").setAttribute("class","opq");

var element15 = document.getElementById("header").attributes[1];
console.log(element15);
//class = "opq"

var element16 = document.getElementById("header").getAttribute("class");
console.log(element16);
//opq


//----------------------------------------------------------------------------set other new attribute
document.getElementById("header").setAttribute("style","border : 7px dotted;");

var element17 = document.getElementById("header").attributes[3];
console.log(element17);//style="border : 7px dotted;"

var element18 = document.getElementById("header").getAttribute("style");
console.log(element18);//border : 7px dotted;


//-----------------------------------------------------------------------------show all attributes
var element19 = document.getElementById("header").attributes;
console.log(element19);


//------------------------------------------------------------------------removeAttribute(AttributeName)
document.getElementById("header").removeAttribute("style");
var element20 = document.getElementById("header").attributes;
console.log(element20); 