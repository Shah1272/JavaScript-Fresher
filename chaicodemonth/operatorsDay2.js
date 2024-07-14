console.log(`Arithmatic Operators`)
console.log(`Task 1`)
let a = 7
let b = 4
console.log(`Addition of Two numbers is ${a+b}`)
console.log(`Task 2`)
console.log(`subtract of Two numbers is ${a-b}`)
console.log(`Task 3`)
console.log(`multiplication of Two numbers is ${a*b}`)
console.log(`Task 4`)
console.log(`division of Two numbers is ${a/b}`)
console.log(`Task 5`)
console.log(`Remainder is ${a%b}`)
console.log()
console.log(`Assignment Operators`)
console.log(`Task 6&7`)
let c = 19
let d = 21
let e = 21
const add = c+d
console.log(add)
const sub = d-c
console.log(sub)
console.log()
console.log(`comparison operator`)
console.log(`Task 8 to 10 are below`)
const large = c>d
const small = c<d
console.log(`is ${c} greater than ${d} ==> ${large}`)
console.log(`is ${c} less than ${d} ==> ${small}`)
const greatEqual = c>=d
const leesEqual = e<=d
console.log(`is ${c} greater than or equal to ${d} ==> ${greatEqual}`)
console.log(`is ${e} less than or equal ${d} ==> ${leesEqual}`)
console.log(`is ${e} equals to ${d} ==> ${e==d}`)
console.log(`is ${c} equals to ${d} ==> ${c===d}`)
console.log()
console.log(`Logical Operators`)
console.log(`Task 11 to 13`)
if(e>=d && c<=d){
    console.log(`e is greater than or equal to d and c is less than or quals to d `)
}
else{
    console.log(`condition is false`)
}
if(e>d || c>=d){
    console.log(`e is greater than or equal to d and c is less than or quals to d `)
}
else{
    console.log(`condition is false`)
}
if(e!==c){
    console.log(`condition is True `)
}
else{
    console.log(`condition is false`)
}
console.log()
console.log("<---Task 14 Tenary Operator--->")
let A = 9
let terOpr = (A>7)?"yes":"no"
console.log(terOpr)