// in this file we make differnt operations and applying different methods on objects
const car ={
    Name : "BMW",
    plate : 786,
    trans : "auto"
}
const truck = {
    model : "Ford",
    number : 789,
    transmission : "Manual"
}
// lets add both objects in a single object using differnt methods and techs
const obj = {truck, car} // this methods create problems        
// console.log(obj);
  // THIS IS BEST METHOD TO ADD TWO OBJECTS
// const Obj = Object.assign({},car,truck)
// console.log(Obj); 
    //Superb method using spread operator
// const add = {...car,...truck};
// console.log(add);
Object.freeze(truck)     // now you can strict object you can never add or change the property of an object in this case 
console.log(Object.isFrozen(truck)) // checks wheather object is frozen or not

// lets talk about some usefull object methods
const car2 = Object.create(car); // creates a prototype of object
console.log(car2)

// lets we want add or modify the property of an object using method
Object.defineProperty(car,"Manufacturer",{
    value : "Japan",
    writable: true,
    enumerable:true,
    configurable: true
})

// const key = Object.keys(car) // holds key element
// console.log(key)
// const val = Object.values(car)
// console.log(val) // holds values of an object
 const ent = Object.entries(car) // converts the objet propertis into aray pair
console.log(ent)
// lastly we will seal the object
Object.seal(car);
car.type = "super" // this property is not added due to seal 
console.log(car);
