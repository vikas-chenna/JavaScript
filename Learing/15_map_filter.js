//maps , filter

/**
 * maps is used like object it take two things key and value
 */

let map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const element of map) {
   // console.log(element);
    
}

// filter is used to return a value 

let myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter( (num) => num >= 5)
//console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //find only Fiction,Fiction,History,science
  
  let bkFic = books.filter( (bk) => {return bk.genre == "Fiction"})
  //console.log("Fiction Books ",bkFic);

  let bkNFic = books.filter( (bk) => bk.genre == "Non-Fiction")
  //console.log("Non-Fiction Books " ,bkNFic);

  let bkHis = books.filter( (bk) => bk.genre == "History")
  //console.log("History Books " ,bkHis);

  let bkSci = books.filter( (bk) => bk.genre == "Science")
  //console.log("Science Books " ,bkSci);
  
  

  //find publish before 1980,,2000,,2020

  let afPush = books.filter((bk)=>bk.publish>=1980)
  console.log("Publish after 1980",afPush);

   afPush = books.filter((bk)=>bk.publish>=2000)
  console.log("Publish after 2000",afPush);
  
   afPush = books.filter((bk)=>bk.publish>=2020)
  console.log("Publish after 2020",afPush);
  
