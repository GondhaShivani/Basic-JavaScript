/*
 /* -----------------1----------------
> parentElement VS parentNode
parentNode return something if it has parent or Not.
parentElement return null if it has no parent. 
-------------------------------------*/


                          /* 


//1. parentElement
var element1 = document.getElementById("inner").parentElement;
var element2 = document.getElementById("outer").parentElement;
var element3 = document.body.parentElement;
console.log(element1);
console.log(element2);
console.log(element3);

document.getElementById("inner").parentElement.style.backgroundColor = "darkcyan";

document.getElementById("inner").parentElement.style.border = "2px solid black";

document.getElementById("child-c").parentElement.style.border = "2px solid yellow";



//2. parentNode
var element4 = document.getElementById("main").parentElement;
console.log(element4);
//it return null if no parent of that such id.
//null

var element5 = document.getElementById("main").parentNode;
console.log(element5);
//it return something even if no parent of that such id.
//#document

                          */


/*-----------------2---------------------
> childNodes VS children
children only target Tags.
childNodes have enters spaces comment text tags whole. 
-------------------------------------*/

                            /*
                            
                            
//3. children
var element6 = document.getElementById("outer").children;
console.log(element6);
//HTMLCollection(2) [h2, div#inner, inner: div#inner]

var element7 = document.getElementById("inner").children;
console.log(element7);
//HTMLCollection(6) [h2, div, div, div#child-c, div, div, child-c: div#child-c]

var element7 = document.getElementById("inner").children[1];
console.log(element7);
//<div>A</div>

document.getElementById("child-c").addEventListener("mouseenter",function(){
    this.style.backgroundColor = "cyan";
});


//4. style children
var element8 =  document.getElementById("inner").children;
console.log(element8);
//get h2 index 0

document.getElementById("inner").children[0].style.backgroundColor = "pink";
//chnage h2 color

                            */

/*------------------3-------------------------
> firstElementChild VS firstChild
- firstElementChild only target Tags.
- firstChild have enters spaces comment text tags whole. 
---------------------------------------------*/


                             /*
                             
                             
//5. FirstElementChild Method
var element9 = document.getElementById("inner").firstElementChild;
console.log(element9);
//it will return 1st tag of targeted Id.
//<h2 style = ...>Inner</h2>

document.getElementById("outer").firstElementChild.style.backgroundColor = "pink";
var element10 = document.getElementById("outer").firstElementChild;
console.log(element10);


//6 LastElementChild Method
document.getElementById("inner").lastElementChild.style.backgroundColor = "yellow";
var element11 = document.getElementById("inner").lastElementChild;
console.log(element11);


//7 firstChild Method
var element12 = document.getElementById("inner").firstChild;
console.log(element12);//#text -> data: "\n  

var element13 = document.getElementById("child-c").firstChild;
console.log(element13);//"C"


//8 LastChild Method
var element14 = document.getElementById("inner").lastChild;
console.log(element14);//#text -> data: "\n  

var element15 = document.getElementById("child-c").lastChild;
console.log(element15);//"C"

                             */

/*------------------4-------------------------
> nextElementSibling VS nextSibling
- nextElementSibling only target Tags.
- nextSibling have enters spaces comment text tags whole. 
---------------------------------------------*/
                         

                             /* 
//9 nextElementSibling
var element16 = document.getElementById("child-c").nextElementSibling;
console.log(element16); //<div>D</div>


//9 nextElementSibling
var element21 = document.getElementById("child-c").nextElementSibling.style.border = "3px dotted black";
console.log(element21);


//10 nextSibling
var element17 = document.getElementById("child-c").nextSibling;
console.log(element17);//#text -> data: "\n  


//11 previousElementSibling
var element18 = document.getElementById("child-c").previousElementSibling;
console.log(element18); //<div>B</div>


//10 previousSibling
var element19 = document.getElementById("child-c").previousSibling;
console.log(element19);//#text -> data: "\n  


//12 previousElementSibling
var element20 = document.getElementById("child-a").previousElementSibling;
console.log(element20); 
//<h2 style="background-color: pink;">Inner</h2>
 
                    */

//13
var element23 = document.getElementById("child-c").nextElementSibling.innerHTML;
console.log(element23);