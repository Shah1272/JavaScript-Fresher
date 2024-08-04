// in this file we use singleton object
const user = new Object(); //creates a singlton object

user.name = "Muhammad"; // assign property 
 // lets suppose we make id uniqe

const id = Symbol(); 
// now add the property in object

user[id] = "23";
user.address = "Khiali";
// now create a fuction os greeting in person object
user.greeting = function(){
    console.log(`My name is ${this.name}`);    
}

console.log(user);

