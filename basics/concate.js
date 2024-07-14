const name = "  Muhammad  "
const last = "Shah"
console.log("Ali"+"shah"); // basic concate
console.log(name.concat(last)); // This concatination done by concat function
console.log(name + last); // concat using + operator
let str = new String("Ali")  // line 1 and 6 are same 
console.log(str.length , str.includes("A")) // basic methods for string further search and read
console.log(name.trim()); // trim will remove spaces around string  
//  ------ important notation String interpolation------>
console.log(`My name is ${name} and last name is ${last}.`)
