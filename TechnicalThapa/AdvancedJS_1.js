/* 



//-------------------------------------1----------------------------------------
                                 event propogation
//----------------------------------------------------------------------------
 



*/

//img4

//bottom to top -- bubble phase (child to parent)
//top to bottom -- capture phase (parent to child)

/* 


What is Event Bubbling?

-Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element. 
//OR
-with event bubbling, the event is first captured and handled by  the innermost element and then propagated to outer elements.
*/

//get reference
//https://www.freecodecamp.org/news/event-bubbling-in-javascript/

/*

What is event capturing?

--with event capturing, the event is first captured and handled by  the outermost element and then propagated to inner elements.

capturing is also called "tricking", which helps remember the propgation order.

*/

/* 





//-------------------------------------1----------------------------------------
                                 Higher Order Function
                                 Callback function
//----------------------------------------------------------------------------
 





*/

// // InterView Question
// // Difference Between Higher Order Function and Callback Function ?

// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF
// // wo function jo dusre function ko as an argument accept krta hai use HOF

// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF
// // A callback function is a function that is passed as an argument to
// // another function, to be “called back” at a later time.

// // Jis bhi function ko hum kisi or function ke under as an arguments passed
// // krte hai then usko hum CallBack fun bolte hai

// we need to create a calculator

const add = (a, b) => {
  return a + b;
};
//console.log(add(5, 2));

const subs = (a, b) => {
  return Math.abs(a - b); //positive
};
const mult = (a, b) => {
  return a * b;
};
const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

//console.log(calculator(5, 2, subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use

// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator

console.log(calculator(5, 6, add));
console.log(calculator(5, 6, subs));
console.log(calculator(5, 6, mult));

// // In the above example, calculator is the higher-order function,
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument

// // and add, sub and mult are called the callback function bcz they are passed
// // as an argument to another fucntion
