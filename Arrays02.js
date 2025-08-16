const marvel_hero=["Thor","IronMan","Spidy"]
const dc_heros = ["Superman","Batman","Flash"]

//marvel_hero.push(dc_heros)
//console.log(marvel_hero) 
//This cause Array inside array
//console.log("Size after join is: ",marvel_hero.length)

// const newArr= marvel_hero.concat(dc_heros) 
// // This will cause new array formation when we store in 
// // new variable 
// console.log(newArr)

//+++++++ Spread ++++++++
const all_new_heros = [...marvel_hero,...dc_heros]
//console.log("Array after spread: " ,all_new_heros)

const another_array = [1,2,3,4,[5,6,7],7,[8,9,10],[9,10,4,5]]

const real_array = another_array.flat(Infinity)
//console.log("After using flat: ",real_array)


console.log(Array.isArray("Hitesh"))
// Array.from convert the String into Array  
console.log(Array.from("Hitesh")) 
console.log(Array.from({name:"Abhay"})) // This will not will converted directly

// We have to provide that which of the following should be convrted to Array 
//either by keys or by values 


let score = 100
let score1= 300
let score3 =400
// This will convert values to Array (Arrays.of())
console.log(Array.of(score,score1,score3))