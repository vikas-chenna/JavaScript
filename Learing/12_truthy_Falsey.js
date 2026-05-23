//truethy and false value 

// falsey value
// "",false,bigInt 0n,0,-0,null,undefined,NaN

// truthy value

// true,"wssd",[],"0",{},function(){}

//how to finc empty obj

let empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Object is Empty");
    
}

// nullish coalescing operator (??) : null undefined
// 
let val = 10 ?? 20;

let val1 = null ?? 30;

let val2 = undefined ?? 40;

console.log(val);
console.log(val1);
console.log(val2);


//ternary operator condition ? true : false

let chaiPrice = 10;

chaiPrice <= 20 ? console.log("Chai is cheap") : console.log("Chai is Expensive");
