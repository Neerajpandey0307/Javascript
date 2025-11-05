/*
==========================================================
📘 TOPIC: VARIABLES IN JAVASCRIPT
==========================================================

🧠 Variables are used to store data in memory.
In JavaScript, we can declare variables in 3 main ways:
  1️⃣ const
  2️⃣ let
  3️⃣ var
*/

// ===============================
// 🌟 1️⃣ CONST
// ===============================
const accountId = 154655;
// Constant → cannot be changed once declared
// Example: IDs, fixed values, API keys

// accountId = 500; ❌ Error: not allowed (const cannot change)


// ===============================
// 🌟 2️⃣ LET
// ===============================
let accountEmail = "neerajpandey.google.com";
// Can be changed after declaration (modern and safe way)
accountEmail = "npandey@gmail.com"; // ✅ works fine


// ===============================
// 🌟 3️⃣ VAR
// ===============================
var accountPassword = "123458";
// Works like let, but not recommended ❌
// Because var has "function scope" (not block scope)
// It can cause unexpected bugs when used inside blocks


// ===============================
// 🌟 4️⃣ Without keyword (not recommended)
accountCity = "Delhi";
// JS allows this, but ❌ not good practice
// Because it becomes a global variable automatically


// ===============================
// 🌟 5️⃣ Declaring empty variable
let accountState;
// Variable made but value not given → undefined
// Useful when we will assign value later


// ===============================
// 🌟 Printing values
console.log(accountId); // prints single value
console.log(accountState); // undefined


// 🌟 Print all in a table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
console.table() → prints all values neatly in a table format
*/


/*
==========================================================
🧠 SHORT NOTES
==========================================================

| Keyword | Can Change Value? | Scope Type | Use For | Note |
|----------|------------------|-------------|----------|------|
| const    | ❌ No            | Block Scope | Fixed values | Safer for constants |
| let      | ✅ Yes           | Block Scope | Normal use   | Recommended |
| var      | ✅ Yes           | Function Scope | Old code | Avoid using |
| none     | ✅ Yes           | Global Scope | Not safe | Avoid completely |

💡 Tips:
✅ Use `const` by default → for values that never change  
✅ Use `let` when you plan to reassign later  
❌ Avoid `var` (old JS style, causes bugs)  
❌ Never create variable without `let` or `const`

==========================================================
*/
