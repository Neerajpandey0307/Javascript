//  JavaScript is Dynamically typed language which means
/* 
@ variable type is decided at runtime
@ you don't have to write the type manually
@ same variable can store different types
@ JS engine automatically detects the type
@ No strict type checking before runnig the code
@ error related to type  come while running
*/

// DATATYPES ARE TWO TYPE


// 1) Primitive 

// 7 TYPES -: String , Number , Boolean , Null , undefined, Symbol(to make any value unique), BigInt(some big value or scientific value)

let DatatypeString = "neeraj" 
let DatatypeNumber  = 3
let DatatypeBoolean = true
let DatatypeNull = null // null means nothing not 0 not any other thing it means nothing 
let DatatypeUndifined // undifined means the value is not given to this but a space had created.
let DatatypeBigInt= 24143546765432n // it stores number but big numbers which is not possible to store in the NUMBER datatype.
const id = symbol("2234");
const anotherId =symbol("234")
console.log(id===anotherId) // flase , because symbol treat every value as differnt , if they are same also , it use in production level where might some value clash , and they can be overwite.


//  2) Reference or Non Primitive

// Array , Objects ,Functions
 


const Marauders=["Sirius", "James", "Lupin", "peter" ];// array

let animagous ={
    name :"sirius black",
    AnimalAtWhichAge: 15,
    IsAlive : false

} // object

const MyFunction =function(){
    console.log("hi")
}

// ************null typeof is object*********