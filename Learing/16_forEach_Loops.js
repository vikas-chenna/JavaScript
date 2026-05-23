//ForEach loops is used for arrays

//it does not return any values


let myArr = [1,2,3,4,5,6,7,8,9,10]

myArr.forEach(element => {
    console.log(element);
    
});

let users = [
    {
        language : "Javascript",
        extension : ".js"
    },
    {
        language : "Java",
        extension : ".java"
    },
    {
        language : "Python",
        extension : ".py"
    },
]

users.forEach(element => {
    console.log(`file name is ${element.language} annd extension is ${element.extension}`);

})

