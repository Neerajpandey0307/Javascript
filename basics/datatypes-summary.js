/*
=====================================================
📘 TOPIC: DATA TYPES IN JAVASCRIPT
=====================================================

JavaScript is a **Dynamically Typed Language**.
That means:
@ Variable type is decided at runtime
@ You don’t need to write the type manually
@ Same variable can hold different types at different times
@ JS engine automatically detects the type
@ There is no strict type checking before running the code
@ Type-related errors come only while running (runtime errors)
*/

// =====================================================
// 🌟 DATA TYPES ARE OF TWO TYPES:
// 1️⃣ Primitive
// 2️⃣ Reference (Non-Primitive)
// =====================================================


// =====================================================
// 🌟 1️⃣ PRIMITIVE DATA TYPES
// These are simple values — stored directly in memory
// =====================================================

// There are 7 types: 
// String , Number , Boolean , Null , Undefined , Symbol , BigInt

let dataTypeString = "neeraj";        // String → text value
let dataTypeNumber = 3;               // Number → numeric value
let dataTypeBoolean = true;           // Boolean → true or false

let dataTypeNull = null;              // Null → nothing (empty value)
                                       // Not 0, not undefined — means “nothing there”

let dataTypeUndefined;                // Undefined → variable declared but no value given

let dataTypeBigInt = 24143546765432n; // BigInt → used for very large numbers

const id = Symbol("2234");            // Symbol → unique value
const anotherId = Symbol("2234");

console.log(id === anotherId); // ❌ false
/*
🧠 Meaning:
- Even if two symbols have same text ("2234"), they are unique.
- Symbol is used in production to create unique keys 
  so that no variable overwrites another by mistake.
*/


// =====================================================
// 🌟 2️⃣ REFERENCE (NON-PRIMITIVE) DATA TYPES
// These store collections or complex data
// =====================================================

// 🔸 Array → group of values
const Marauders = ["Sirius", "James", "Lupin", "Peter"];
console.log(Marauders);

// 🔸 Object → group of key-value pairs
let animagus = {
  name: "Sirius Black",
  AnimalAtWhichAge: 15,
  isAlive: false
};
console.log(animagus);

// 🔸 Function → block of code that performs a task
const myFunction = function () {
  console.log("Hi, I am a function");
};

myFunction();

/*
🧠 Note:
- Arrays, Objects, and Functions are called “Reference types”.
- Because they are stored and copied by reference (not by value).
*/


// =====================================================
// 🌟 EXTRA NOTE
// =====================================================

/*
✅ null type → object  (this is a known bug in JS)
✅ typeof null → "object"
✅ typeof undefined → "undefined"

💡 Tip:
- Primitive types are copied by value.
- Reference types are copied by reference (point to same memory).
*/


// =====================================================
// 🧠 SHORT SUMMARY
// =====================================================
/*
| Type Group       | Data Type Name       | Example / Meaning                             |
|------------------|----------------------|-----------------------------------------------|
| Primitive        | String               | "neeraj" (text)                               |
| Primitive        | Number               | 45                                            |
| Primitive        | Boolean              | true / false                                  |
| Primitive        | Null                 | empty (nothing there)                         |
| Primitive        | Undefined            | declared but not given any value              |
| Primitive        | Symbol               | unique value (Symbol("id"))                   |
| Primitive        | BigInt               | 12345678901234567890n (big number)            |
| Reference (Non)  | Array                | ["Sirius", "James", "Lupin"]                  |
| Reference (Non)  | Object               | {name:"Sirius", age:15}                       |
| Reference (Non)  | Function             | function() { console.log("hi") }              |

💡 Quick Tip:
✅ JS decides type automatically at runtime.
✅ Use typeof to check type of any variable.
✅ null shows "object" (small bug in JS).
=====================================================
*/
