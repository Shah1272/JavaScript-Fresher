console.log("This is all about Numbers and integers in js")
//const salary = 19 both 2 and 3 are same  
let salary = new Number(19);
//console.log(salary.toString().length)  convert number into string and check length
console.log(salary.toFixed(2))
let otherNumber = 28.712
console.log(otherNumber.toPrecision(2)) // precise the decimal value 
// use ciel and floor and Math operation
let n = 26.466
console.log("Square root using Math operator => "+Math.sqrt(n)) //=====> For square root of any nmber
console.log(`using of ciel orginal number is ${n} and after ceil operator ==> ${Math.ceil(n)}`)
console.log(`using of floor orignal is ${n} and after floor ==> ${Math.floor(n)}`)
console.log(`using of Round orignal is ${n} and after Round ==> ${Math.round(n)}`)
