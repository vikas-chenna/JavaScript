///arrow functions 
/**
 * arrow functions are like normal functions but in this there is no function name 
 * we can hold this function in a variable 
 */


let arrowFun = () => {
    console.log("Hello World");
}

// arrowFun();

let addOne = (num1) => {
    return num1 + 1;
}
// console.log(addOne(5));

let addTwo = (num1) =>  num1 + 2;
let addTwo1 = (num1) => ( num1 + 2);

// console.log(addTwo(5));
// console.log(addTwo1(10));


let obj = () => ({name : "vikas"})

console.log(obj());
console.log(obj().name);

let printThis = () => {
    console.log(this);
    
}

console.log(this);


