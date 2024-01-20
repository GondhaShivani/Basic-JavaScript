/* we have 3 DOM methods by which we can style CSS.
- Style
- className
- classList */


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^using style


//------------------------------------------------------------------get style
var element1 = document.querySelector("#header").style.color;
console.log(element1);
//blueviolet


//-------------------------------------------------------get style which is not apply in document
var element2 = document.querySelector("#header").style.backgroundColor;
console.log(element2);
//null(emptySpace)
//bcz backgroundColor is not defined in styling.


//-------------------------------------------------------------------------------------set style
var element3 = document.querySelector("#header").style.backgroundColor = "bisque";
console.log(element3);
//bisque


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6using className

//---------------------------------------------------------------------------set class
var element4 = document.querySelector("#header").className = "abc xyz";
console.log(element4);
//abc xyz
//make 2 classes

//-------------------------------------------------------------------------print class by className
var element5 = document.querySelector("#header").className;
console.log(element5);
//abc xyz
//list down all className of perticular id header.


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^using classList

//----------------------------------------------------------------------print class by classList
var element6 = document.querySelector("#header").classList;
console.log(element6);
//return an array of all classes
//['abc','xyz']


//---------------------------------------------------------------------------------set class
var element8 = document.querySelector("#header").classList = "opq";
console.log(element8);


//---------------------------------------------------------------------------------set class
var element9 = document.querySelector("#header").classList = "opq abc xyz";
console.log(element9);
//opq abc xyz


//---------------------------------------------------------------------------------print class
var element10 = document.querySelector("#header").classList;
console.log(element10);
//return an array of all classes
//['opq',abc','xyz']


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~classList return an array of all classes
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~className return an string of all classes


//-----------------------------------------------------------------------------------add class
document.querySelector("#header").classList.add("mnq");
var element11 = document.querySelector("#header").classList;
console.log(element11);
//['opq',abc','xyz','mnq']


//----------------------------------------------------------------------------------remove class
document.querySelector("#header").classList.remove("mnq","abc");
var element12 = document.querySelector("#header").classList;
console.log(element12);
//['opq','xyz']