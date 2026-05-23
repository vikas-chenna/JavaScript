//scopes in js 
/**
 * as i already mention before in let ,var time, now we see more in detail about scope
 *
 * scope means   {} the code will lies between this curely braces is lnoow as scope
 */


//why it is import 
//we declare same variables with let and var 

// let a = 10;
// var b = 20;
// const c = 30

if(true){
    let a = 50;
    var b = 60;
    const c = 70;
}



// console.log(a);
// console.log(b);
// console.log(c);

//here when we print the values which is define in inside the scope the let,const return error that you cannot access inside variables but with the var it can accessable




/* there are two ways which we are declaring the variables 
    1) golbal varibales means any every can access this variables in the program
    2) local variables  means only function,with in the scope can acces this varibales 
    
*/

let name = "vikas chenna"

if(true){
    let web = "Git";
  //  console.log(`my name is ${name} and i am pushing my code using ${web} `);
}

// console.log(web); //here web is not define error is coming because we are declare web variable inside if byt access outside if



function one(){
    let firstName = "vikas"

    function two(){
        let lastName = "chenna"
        console.log(`my first name is ${firstName} and y last name is ${lastName}`);
    }
    two()
    // console.log(lastName);
}
one()
// console.log(firstName);


console.log(addOne(5))

function addOne(num){
    return num + 1;
}

//here we are printing the function values before the function declaration it gives output

console.log(AddTwoNumbers(6))

let addTwoNumbers = function addTwo(num){
    return num + 2;
}
//here we are printing the function values before the function declaration and function storee inn a variable when i run the second program it will give an error because the variable is define after printing the variables