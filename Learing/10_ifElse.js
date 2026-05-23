//if else too check the condition and if condition get true do some work else do another work

let userLoggedIn = true;
let emailLogin = false;
let googleLogin = true;

if(userLoggedIn  && emailLogin  || googleLogin ){
    console.log("User Can Buy Stuff");
}else{
    console.log("Error login again");
    
}

let value = 100;

if(value < 200){
    console.log("Value is Less Than 200");
}else if(value < 400){
    console.log("Value is Less Than 400");
}
else if(value < 600){
    console.log("Value is Less Than 600");

}else if(value < 800){
    console.log("Value is Less Than 800");
}else{
    console.log("Value is greater Than 1000");

}
