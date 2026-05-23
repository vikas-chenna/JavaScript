//functions in js

/**
 * Function is a block of code which we can reuse any where in he program to call set of code or instruction
 * ex :-
 * function addTwoNumbers(num1,num2){
 *      console.log(num+num2)
 * }
 */

function sayMyName() {
  console.log("Vikas chenna");
}

// sayMyName();



function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// addTwoNumbers(5,4);

let myfun = function addThreeNum(num1,num2,num3){
    console.log(num1+num2+num3);
}

// console.log(myfun(5,5,5));

function sumTwo(num1,num2){
    return num1 + num2
}

let printSumTwo = sumTwo(5,6);
// console.log(printSumTwo);



///we can pass objects in functions

let user = {
    name : "vikas",
    age : 25,
    email : "vikas@gmail.com"
}

function printName(anyObject){
    console.log(`hello ${anyObject.name} your email is ${anyObject.email} is registered`);
}

printName(user)
// or

printName({
    name:"vikas chenna",
    age:25
})

let myArray = [1,2,4,5,6]

function printArray(anyArray){
    console.log(anyArray[2]);
}

// printArray(myArray)
// or

printArray([1,2,"Vikas chenna",4,5])

//we can pass more than 1 parameters and also can be print using ( rest operator (...) )

function addToCart(...numbers){
    console.log(numbers);
}

addToCart(10,20,30,40,50,30,4,5,80,90,100)


function addToCart1(val1,val2,...numbers){
    console.log(numbers);
}

addToCart1(10,20,30,40,50,30,4,5,80,90,100) //10 and 20 assiign in val1 and val2 rest of numbers assign in ...numbers
