//  Immediately Invoked Function Expressions (IIFE)
// the function which execuate immediately after deploy

(function iife(){
    console.log("DB Connected");
})();

//  put ' ; ' is imp otherwise it will assume that this two are one

( (name) => {
    console.log(`Hello ${name}, have a Nice day`);
})("vikas")


