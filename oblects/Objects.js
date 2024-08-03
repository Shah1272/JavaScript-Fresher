console.log("Its my first tuturial of objects")
// singleton objects are those which are created by constructur like Object.create
// object literals are below
const cnic = Symbol();
console.log(typeof(cnic))
let person = {"Name":"Muhammad" , Age:23 , "City":"Gujranwala",
             Gender:"Male", studyDays:['Monday',"Friday"], [cnic]:"34101"}
// there are two methods to access object 
console.log(person.studyDays[0])
console.log(person["Age"])
console.log(person["City"])
// let we can add symol which is unique property of an object like cinic
// person[Symbol("cnic")] = 34101

console.log(typeof(person[cnic]))