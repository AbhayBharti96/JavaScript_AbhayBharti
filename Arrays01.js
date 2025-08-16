//Array
// It can be heterogeneous, Resizeable, Zero based Indexing
//Copy always make shallow copies 
//Shallow Copy means it refernce the same array where it is copied and changes 
// will be done in original array to 

// Deep Copy: Its the vice versa of Shallow copy 
const myArrr = [0,1,2,3,4,5,6,true,"abhay"]
//console.log(myArrr[4]);
// +++++++++++++++++++++++++++++++++++++++ Methods +++++++++++++++++++++++
const myHeros = ["Shaktiman","Nagraj"]
const arr2 = new Array(1,2,3,4,5,6,7)
//console.log(arr2[4])

//Methods
// myArrr.push(19)
// myArrr.push(20)
// myArrr.pop()//this will remove the last element from the array
//myArrr.unshift(9) 
//This will add element at first index but cause the shift of each element 
//which cause high load so we have to use carefully
//yArrr.shift() 
// This will use to conver the change of unshift function this will pop that value 
// console.log(myArrr.includes(18))
// console.log(myArrr.indexOf(5))
// const newArr = myArrr.join()
// console.log(myArrr)
// console.log(newArr) // This joins the table and converted into String 


// Slice and Splice 
 console.log ("A",arr2)
 const A= arr2.slice(1,3)//This will print values from 1 - 2 by indexes 
 console.log(A)
 console.log ("A",arr2)

 //+++++Splice+++++
 const B= arr2.splice(1,3) // This will manipulate the original Array remove the spliced part.
console.log(B)
console.log ("A",arr2)