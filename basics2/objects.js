// singleton
// Object.create // this also the type of to create objext hrough consrutor method and singleton is related to this , for later on.


//object litereals - how to declare objects
const employee={
    name :"neeraj",  
    age:24,
    location:"noida",
    email :"neeraj.google.com",
    isLoggedIn:"false",
    lastLoggedInDays :["monday","tuesday","friday"],
    [Symbol("MachineAccess")]: "No"

 
}
console.log(typeof(employee.name))// name is a key in this which the objects took as string

console.log(employee.email) // this is a way to access the value from objects but there is a small catch to it that if the keys are in double qoutes("") then we can't able to acess it by this method.

//for that we use the following method:

console.log(employee["email"]) // from this method we can access the any type type of key if it is in double qoutes("") or not.

console.log(employee["lastLoggedInDays"]) // this is a way to acess array from the obeject.


const symbols = Object.getOwnPropertySymbols(employee);
console.log(employee[symbols[0]]); 
//When a Symbol is made inside an object, use Object.getOwnPropertySymbols(object) to get its key,then use that key to access its value.

// or if want simple , you have to declare the symbol outside object and put that in object from where you can access it easily like others.

employee.email = "neerajpandey@cloudfare.com" // we can any value in object by this
console.log(employee)

Object.freeze(employee) // this freeze the object to edit any thing , you can edit .
employee.name= "pandey"
console.log(employee)

//**********FUNCTION IN OBJECTS********************************

employee.greeting=function(){
    console.log("Hello, Everyone")
}

employee.greetingtwo=function(){
    console.log(`hello employee, ${this.name}`)
}
console.log(employee.greeting());
console.log(employee.greetingtwo());