/*
==================================================
📘 TOPIC: TRUTHY & FALSY VALUES + NULLISH & TERNARY
==================================================

🧠 Meaning:
In JavaScript, every value is either **Truthy** or **Falsy** when checked inside a condition.
Truthy → acts like TRUE
Falsy → acts like FALSE
*/

// ===============================
// 🌟 Example 1: Basic truthy check
// ===============================
const userEmail = "neeraj@ai.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// ===============================
// 🌟 FALSY VALUES
// ===============================
/*
false
0
-0
0n          // BigInt zero
""          // empty string
null
undefined
NaN
*/

// ===============================
// 🌟 TRUTHY VALUES
// ===============================
/*
"0"         // non-empty string
"false"     // still a string
[]          // empty array
{}          // empty object
function(){} // any function
*/


// ===============================
// 🌟 Example 2: Empty array check
// ===============================
const userGmail = [];
if (userGmail.length === 0) {
  console.log("Array is empty");
}


// ===============================
// 🌟 Example 3: Empty object check
// ===============================
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}


// ===============================
// 🌟 Type coercion with ==
// ===============================

console.log(false == 0);   // true
console.log(false == "");  // true
console.log(0 == "");      // true

/*
🧠 WHY:
Because (==) does **type coercion** — converts values before comparing.
- false == 0 → both become 0
- false == "" → both become 0
- 0 == "" → both become 0

⚠️ Use (===) for strict comparison to avoid this confusion:
false === 0 → false
0 === "" → false
*/


// ===============================
// 🌟 Nullish Coalescing Operator (??)
// ===============================
// Checks only for null or undefined

let val1;

// val1 = 5 ?? 10;           // 5 → not null/undefined → result 5
// val1 = null ?? 10;        // null → fallback to 10
// val1 = undefined ?? 15;   // undefined → fallback to 15
val1 = null ?? 10 ?? 20;     // first valid non-null/undefined value = 10

console.log(val1); // Output: 10

/*
🧠 Difference from (||):
?? → ignores falsy values like 0, "", false  
|| → treats any falsy as false
*/

console.log(0 ?? 5);    // 0 (not null)
console.log(0 || 5);    // 5 (0 is falsy)


/*
| Operator | Example | Result | Why |
|-----------|----------|---------|------|
| ?? | null ?? 10 | 10 | null triggers fallback |
| ?? | 0 ?? 10 | 0 | 0 is valid |
| || | 0 || 10 | 10 | 0 is falsy |
*/


// ===============================
// 🌟 Ternary Operator (? :)
// ===============================
// Short form of if...else

const iceTeaPrice = 100;

iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("more than 80");

/*
🧠 Syntax:
condition ? runIfTrue : runIfFalse
*/


// Example: real use
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Type / Expression | Result | Why |
|--------------------|---------|------|
| false | ❌ Falsy | directly false |
| 0, -0, 0n | ❌ Falsy | zero values |
| "" (empty string) | ❌ Falsy | no characters |
| "0" (string) | ✅ Truthy | non-empty |
| "false" (string) | ✅ Truthy | still text |
| null, undefined | ❌ Falsy | no value |
| [] | ✅ Truthy | array exists |
| {} | ✅ Truthy | object exists |
| false == 0 | ✅ true | both convert to 0 |
| false == "" | ✅ true | both convert to 0 |
| 0 == "" | ✅ true | both convert to 0 |
| null ?? 10 | ✅ 10 | fallback to 10 |
| 0 ?? 10 | ✅ 0 | not null/undefined |
| 0 || 10 | ✅ 10 | 0 is falsy |
| price < 80 ? "cheap" : "costly" | depends | ternary example |

💡 Tips:
✅ Use === instead of == for accurate checks  
✅ Check empty array → arr.length === 0  
✅ Check empty object → Object.keys(obj).length === 0  
✅ Use ?? to set default if value may be null or undefined  
✅ Use ? : for quick conditions  
==================================================
*/
