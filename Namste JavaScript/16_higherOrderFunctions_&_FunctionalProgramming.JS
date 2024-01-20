/*

---------------------------1] Higher order function------------------------------------------

- a function which takes another function as a argument or returns a function from it is known as Higher order function.

*/

//________________ex1.
function x(){
    console.log("x");
}

function y(x){             //here y is the Higher order function.
    x();                   //here x is the call back function
}

/*  ex 2 to 5 are basically same 

//_________________ex2.
const radius1 = [2, 3, 5, 7];
const calculateArea = function (radius1) {
    const output = [];
    for (let i=0; i<radius1.length; i++)
    {
        output.push( Math.PI * radius1[i] * radius1[i] );
    }
    return output;
};
console.log("Area is ");
console.log(calculateArea(radius1));
console.log(" ");

//________________ex3.
const radius2 = [2, 3, 5, 7];
const calculateCircumference = function (radius2) {
    const output = [];
    for (let i=0; i<radius2.length; i++)
    {
        output.push( 2 * Math.PI * radius2[i] );
    }
    return output;
};
console.log("Curcumference is ");
console.log(calculateCircumference(radius2));
console.log(" ");

//_____________ex4.
const radius3 = [2, 3, 5, 7];
const calculateDiameter = function (radius3) {
    const output = [];
    for (let i=0; i<radius3.length; i++)
    {
        output.push( radius3[i] * 2 );
    }
    return output;
};
console.log("Diameter is ");
console.log(calculateDiameter(radius3));
console.log(" ");

//_________________ex5.
const num = [2, 3, 5, 7];
const calculateSquare = function (num) {
    const output = [];
    for (let i=0; i<num.length; i++)
    {
        output.push( num[i] * num[i] );
    }
    return output;
};
console.log("Square is ");
console.log(calculateSquare(num));
*/


//________________ex6.           
// ex 2 to 5 all in one code   
// calculate is a higher order function and area, circumference, diameter, square are the callback function which is passed in the argument logic

const radius4 = [2, 3, 5, 7];

const area = function (radius){
    return Math.PI * radius * radius;
}

const Circumference = function(radius){
    return 2* Math.PI * radius;
}

const Diameter = function(radius){
    return 2 * radius;
}

const Square = function(radius){
    return radius * radius;
}

const calculate = function(radius, logic){
    const output = [];
    for (let i=0; i<radius4.length; i++)
    {
        output.push( logic(radius[i]) );
    }
    return output;
}

console.log("radius is -> 2, 3, 5, 7" );
console.log("area is -> " + calculate(radius4, area) + " ");
console.log("circumference is -> " + calculate(radius4, Circumference));
console.log("square is -> " + calculate(radius4, Square));
console.log("diameter is -> " + calculate(radius4, Diameter));