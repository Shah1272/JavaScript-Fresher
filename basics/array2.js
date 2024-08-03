const Names = ["Hero","BatMan","Spiderman"]
const Address = ["Lhr","Isb","Dxb"]
    // Adding two arrays using different approaches 
    // 1st method to add two arrays using push function

// Names.push(Address)
// console.log(Names)
// console.log(Names[3][2]) // if an array contains another array as an element then we can use this
    //2nd method using concat

// const Mixed_Array = Names.concat(Address)
// console.log(Mixed_Array)

    // using Spread operator to add two arrays
const Spread_Array = [...Names,...Address];
console.log(Spread_Array)

    // Special case if an array contains multiple arrays then 
const another_Array = [1,2,3,[4,5,6],7,[8,[9,10],11]]    
// console.log(another_Array[5][1][1])
const useful_Array = another_Array.flat(Infinity) 
console.log(useful_Array) 

// Array methods
let variable = "Muhammad";
console.log(Array.isArray(useful_Array))
console.log(Array.isArray(variable)) // let suppose if variable is not array then convert it into an array
variable = Array.from(variable)
console.log((variable))
// let suppose if we have multiple variable then can we make an array or not
let a = 233
let b = 222
let c = 333
console.log(Array.of(a,b,c))