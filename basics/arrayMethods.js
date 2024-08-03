let arr = [1, 2, 3, 'Muhammad']; // initialize array without constructor

let myArr = new Array("Muhammad", "Ali", "Awais"); // intialize Array using Constructor 
console.log(`Lenngth of an array is = ${arr.length} and elements in the array is = ${arr}`)

// Array methods basics
arr.push("Gohar"); // Add the element at the end of the array
console.log(arr)
console.log(arr.pop(), arr) // pop is used to take the last element from array

myArr.unshift(1); // unshift method is used to insert any elemnt at 0 index
myArr.unshift(5);
myArr.shift(); // removes 0 index element from array

// finding an element using include or index of methods

console.log(`index of 3 in array using index method ${arr.indexOf(3)}`)
console.log(`is Gohar is still include in the array or not? ${arr.includes("Gohar")}`)
console.log(`is Muhammad is still include in the array or not? ${arr.includes("Muhammad")}`)
