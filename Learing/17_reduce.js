// reduce in js
/**
 * it has two values
 * first is accumulator which takes total value in it after every loop
 * value which take value 
 * by default we have to give a value to accumulator
 *  */ 


let myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.reduce( (acc,val) => acc + val,0)
console.log(newNums);

let courses = [
    {
        courseName : "Web Development",
        price : 1919
    },
    {
        courseName : "Data Science",
        price : 6969
    },
    {
        courseName : "Python",
        price : 12999
    }
]


let total = courses.reduce( (acc,val) => acc+val.price,0)
console.log(total);
