
// Primitive DataTypes: [String ,Number, Boolena , Null , Undefined , Symbol, BigInt]
let str = "abhay";
let num = 123
let isLogg = true
let n = null
let u = undefined
let id = Symbol('123')
let bigInt = 123456789n
console.log(typeof str)
console.log(typeof num)
console.log(typeof isLogg)
console.log(typeof n)
console.log(typeof u)
console.log(typeof id)
console.log(typeof bigInt)


console.log("Non Primitive Data Types :  ")

// Non prmitive [Array, Object ,Functions]

let arr = ['a','b']
let myObj = {
    name : "abhay",
    age : 17
}
console.log(typeof arr)
console.log(typeof myObj)

const fun = function(){
    console.log("hello function")
}
console.log(typeof fun)