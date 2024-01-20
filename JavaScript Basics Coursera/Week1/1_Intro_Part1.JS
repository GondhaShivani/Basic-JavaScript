//Array

//you can take element as well array in an array. 
const names = [ "foram", ["shivani","hetvi"], ["bansi","riddhi","madhav"] ];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//in subarray(array-element) you can also access element of subarray.
console.log(names[1][0]);  //shivani

var string = "Hello I am a girl";
console.log(string.length);  
console.log(string[4]);     // a regular variable holding a string is treated like a array.
console.log(string[5]);     // empty space (after o and before I).