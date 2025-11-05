/*
==================================================
📘 TOPIC: OBJECTS IN JAVASCRIPT
==================================================

🧠 Object → A collection of key–value pairs.
Each key has a name and a value.
*/


// ===============================
// 🌟 OBJECT LITERAL — how to make an object
// ===============================

const employee = {
  name: "neeraj",
  age: 24,
  location: "noida",
  email: "neeraj.google.com",
  isLoggedIn: false,
  lastLoggedInDays: ["monday", "tuesday", "friday"],
  [Symbol("MachineAccess")]: "No" // Symbol key (unique)
};

console.log(typeof employee.name); // string


// ===============================
// 🌟 Accessing values
// ===============================
console.log(employee.email); // ✅ normal way to access
console.log(employee["email"]); // ✅ works even if key has quotes
console.log(employee["lastLoggedInDays"]); // ✅ access array from object

/*
🧠 Notes:
- You can access keys using (.) or ["keyName"]
- If key name has quotes or spaces → use ["keyName"]
*/


// ===============================
// 🌟 Accessing Symbol values
// ===============================
const symbols = Object.getOwnPropertySymbols(employee);
console.log(employee[symbols[0]]);

/*
🧠 When Symbol is inside object:
1️⃣ Use Object.getOwnPropertySymbols(object)
2️⃣ Then use that symbol key to get its value.
*/


// ===============================
// 🌟 Update & Freeze object
// ===============================
employee.email = "neerajpandey@cloudfare.com"; // ✅ update value
console.log(employee);

Object.freeze(employee); // ❌ lock object — no changes allowed

employee.name = "pandey"; // won’t change due to freeze
console.log(employee);

/*
🧠 Notes:
- Object.freeze() → makes object read-only.
- No new property or value change allowed.
*/


// ===============================
// 🌟 Add functions inside object
// ===============================

employee.greeting = function() {
  console.log("Hello, Everyone");
};

employee.greetingTwo = function() {
  console.log(`Hello employee, ${this.name}`);
};

console.log(employee.greeting());    // runs function
console.log(employee.greetingTwo()); // uses 'this' keyword

/*
🧠 Notes:
- Functions inside objects are called METHODS.
- 'this' keyword refers to current object.
*/


// ===============================
// 🌟 SINGLETON OBJECT (for later learning)
// ===============================
// const user = Object.create({}) 
// This creates an object using constructor method.
// Singleton means only one instance of object is created.
 


/*
==================================================
🧠 SHORT SUMMARY
==================================================

| Concept / Method | Example | Meaning |
|------------------|----------|----------|
| Object Literal | {name: "Neeraj"} | Simple object creation |
| Access value | obj.key / obj["key"] | Get value |
| Add property | obj.newKey = value | Add or update value |
| Symbol in object | [Symbol("id")]: 101 | Unique key |
| getOwnPropertySymbols() | Object.getOwnPropertySymbols(obj) | Get Symbol keys |
| freeze() | Object.freeze(obj) | Lock object (no edit) |
| Function inside object | obj.method = function(){} | Add method |
| this | Refers to current object | Used inside methods |

💡 Tips:
✅ Use dot or bracket to access values  
✅ Freeze object when you want to protect data  
✅ Use 'this' inside methods for current object  
✅ Symbol keys are always unique  
✅ Object.create() → used in Singleton pattern
==================================================
*/
