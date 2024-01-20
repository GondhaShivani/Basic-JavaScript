//can also use ' ' in place of " "
//The statement "Arrays can only hold one type of data at a time" is also false. Arrays in JavaScript can hold elements of different types, such as strings, numbers, objects, or even other arrays.

//----------------------------------------Array_part1
/*
var colors1 = new Array( "red", "blue", "yellow" );
console.log(colors1.length);  //3
console.log(colors1[0]);  //red

var colors2 = [ "purple", "green", "pink", "sky blue"];
console.log(colors2.length);  //3
console.log(colors2[3]);  //sky blue
*/

//-----------------------------------------Array_part1
/*
var alphabet = [ "abc" , "cd" , "dvgd" , ["hdfh", "dbh"] , "dbhf" , ["hd", "hdb"] , "hfndhf" ];
console.log(alphabet.length);  //7
console.log(alphabet[2]);  //dvgd
console.log(alphabet[3]);   //["hdfh", "dbh"]
console.log(alphabet[3][1]);  //dbh

var string = "my name is shiavni";
console.log(string[3]); //n
console.log(string.length);  //17
*/

//-----------------------------------------Array_practice

var animal = [ "dog", "cat", "lion"];

//1
console.log(animal.length);  //3

//2
console.log(animal.push('tiger'));   //4 -> element

//3
console.log(animal);  //[ "dog", "cat", "lion", "tiger"]

/*
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

array.splice(index, howmany, item1, ....., itemX)
( index	Required.
The position to add/remove items.
Negative value defines the position from the end of the array. )
( howmany	Optional.
Number of items to be removed.)
( item1, ..., itemX	Optional.
New elements(s) to be added. )

Return value = An array containing the removed items (if any).
*/

//4
console.log(animal.splice(1,1));  //index = 1, howMany = 1, return value = ['cat']

//5
console.log(animal);  //["dog", "lion", "tiger"]

//6
console.log(animal.push('cat'));  // 4 ->return element number

//7
console.log(animal);  //["dog", "lion", "tiger", "cat"]

//8
console.log(animal.sort()); //sort in alphabetical order. //["cat", "dog", "lion", "tiger"]

//9
//get last element - no matter how long the array is
console.log(animal [animal.length-1] );  //tiger

//10