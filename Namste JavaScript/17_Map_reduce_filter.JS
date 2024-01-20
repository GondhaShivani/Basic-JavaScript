/*
Map, reduce and filter are higher order function in JavaScript.

Map :
- It is basically used to transform a array. The map() method creates a new array with the results of calling a function for every array element.
- const output = arr.map(function) // this function tells map that what transformation I want on each element of array.

Filter :
- Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

Reduce :
- It is a function which take all the values of array and gives a single output of it. It reduces the array to give a single output.
arr.reduce( function (acc, curr){
    logic;
}, 0);
// current represent the value of array
// accumulator is used the result from element of array.

*/

//------------------------------------------------1] Map--------------------------------------------------
//__________________________________________________________________________________________________________


/*
//_________________________________________ex1.
const arr = [2, 3, 5 ,7, 8];

//transformation - transform an array from another one.
//double = [4, 6, 10, 14, 16]
//triple = [6, 9, 15, 21, 24]

function double(x)
{
    return x*2;
}

function triple(x)
{
    return x*3;
}

function binary(x)
{
    return x.toString(2);
}
const outputD = arr.map(double);
console.log(outputD);

const outputT = arr.map(triple);
console.log(outputT);

const outputB = arr.map(binary);
console.log(outputB);
*/

/*
//ex2.________________________________ex1 using higher order function
//function inside function

const arr = [2, 3, 5 ,7, 8];

const outputD = arr.map( function double(x){
    return x*2;
});
console.log(outputD);

const outputT = arr.map( function triple(x){
    return x*3;
});
console.log(outputT);

const outputB = arr.map( function binary(x){
    return x.toString(2);
});
console.log(outputB);
*/

/*
//ex3.________________________________ex2 using arrow function

const arr = [2, 3, 5 ,7, 8];

const outputD = arr.map( (x) => x*2 ); //if there is only one line in fun code then no need of { }.
console.log(outputD);

const outputT = arr.map( (x) => x*3 );
console.log(outputT);

const outputTT = arr.map( (x) => { return x*3} );   //using { }.
console.log(outputTT);

const outputB = arr.map( (x) => x.toString(2) );
console.log(outputB);
*/

//-------------------------------------------------2] Filter------------------------------------------------
//__________________________________________________________________________________________________________

/*
- filter function is used for filter the values of an array.
- taking array as an input -> and finding out an array -> which has only the value which has filtered based on some logic.
*/

/*
//________________________________________ex4.

const arr = [5, 1, 3, 2, 6];

//odd
function isOdd(x) {
    return x % 2;
}
const outputo = arr.filter(isOdd);
console.log(outputo);

//even
function isEven(x) {
    return x % 2 == 0;
}
const outputE = arr.filter(isEven);
console.log(outputE);

//greater then 4
function isGreater(x) {
    return x > 4;
}
const outputG = arr.filter(isGreater);
console.log(outputG);
*/

/*
//ex5.________________________________________ex4. using arrow function

const arr = [5, 1, 3, 2, 6];

const outputo = arr.filter( (x) => x%2 );
console.log(outputo);

const outputE = arr.filter( (x) => x%2==0 );
console.log(outputE);

const outputG = arr.filter( (x) => x>4 );
console.log(outputG);
*/

/*
//ex6.________________________________________ex4. using higher order function.
//passing function in the argument of another function.

const arr = [5, 1, 3, 2, 6];

//odd
const outputo = arr.filter( function isOdd(x) {
    return x % 2;
});
console.log(outputo);

//even
const outputE = arr.filter(function isEven(x) {
    return x % 2 == 0;
});
console.log(outputE);

//greater then 4
const outputG = arr.filter(function isGreater(x) {
    return x > 4;
});
console.log(outputG);
*/


//------------------------------------------------3] Reduce--------------------------------------------------
//___________________________________________________________________________________________________________

//reduce function is basically used at a place you have to take all the elements of an array and come up with a single value out of them. 

/*  ...............................ex7
const arr = [5, 1, 3, 2, 6];
//_________________________________sum using none functional way
function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
console.log("using normal function sum is = "+ findSum(arr));

//___________________________________using reduce
//1st argument = function
//function(acc, curr){ } 
//reduce basically itterates the function over each and every element of the array.
//current is the value of array during itteration.
//accumulator is the value after perform operation.
//2nd argument = initial value of acc.
const output = arr.reduce( function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log("using reduce sum is = "+ output);
*/

/* .................................//ex8
//_____________________________max using none functional way
const arr = [5, 1, 3, 2, 6];

function findMax(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log("using normal function Max is = "+findMax(arr));

//________________________________________using reduce
//-> we can give max name to acc also for make sence.

const output = arr.reduce( function(acc, curr){
    if(curr > acc)
        acc = curr;
    return acc;
}, 0);
console.log("using reduce max is = "+ output);
*/

//........................ex9 -> tricky Map()
/*
const users = [
{ firstName: "shivani", lastName: "gondha", age: 19},
{ firstName: "hetvi", lastName: "gondha", age: 24},
{ firstName: "bansi", lastName: "gondha", age: 25},
{ firstName: "foram", lastName: "gondha", age: 18},
];
//output like this...
//list of full names.
//["shivani gondha", "hetvi gondha", "bansi gondha", ...]

const output = users.map( (x) => x.firstName +" "+ x.lastName);
console.log(output);
*/

//........................ex10 -> tricky reduce()
/*
const users = [
    { firstName: "shivani", lastName: "gondha", age: 19},
    { firstName: "hetvi", lastName: "gondha", age: 24},
    { firstName: "bansi", lastName: "gondha", age: 25},
    { firstName: "foram", lastName: "gondha", age: 19},
    ];

//output like this...
//{ age : count } -> { 19:2, 24:1, 25:1}.

const output = users.reduce( function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;

}, {});
//second argument = initial value of acc = empty.
console.log(output);
*/

//........................ex11 -> tricky filter()
/*
const users = [
    { firstName: "shivani", lastName: "gondha", age: 19},
    { firstName: "hetvi", lastName: "gondha", age: 24},
    { firstName: "bansi", lastName: "gondha", age: 25},
    { firstName: "foram", lastName: "gondha", age: 19},
    ];

//output like this... 
//{shivani, foram}
//first name of those whose age < 20

const output1 = users.filter( (x) => x.age<20);
console.log(output1);
//output : filter out that people whise age < 20.
//we want firstname only so now apply Map function upon it.

const output2 = 
users.filter( (x) => x.age<20)
.map( (x) => x.firstName);
console.log(output2);
*/

//........................ex12 -> ex11 using reduce()
const users = [
    { firstName: "shivani", lastName: "gondha", age: 19},
    { firstName: "hetvi", lastName: "gondha", age: 24},
    { firstName: "bansi", lastName: "gondha", age: 25},
    { firstName: "foram", lastName: "gondha", age: 19},
    ];

//output: { shivani, foram}
const output = users.reduce( function(acc, curr){
    if(curr.age < 20)
    {
        acc.push(curr.firstName);
    }
    return acc;
}, [ ]);

console.log(output);
