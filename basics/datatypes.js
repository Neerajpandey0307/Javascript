/*
=============================================
📘 TOPIC: BASICS OF JAVASCRIPT & DATA TYPES
=============================================
*/

// "use strict" → tells JS to use the modern (new) rules of JavaScript
"use strict";

// alert(3 + 3)
// ⚠️ Note: 'alert()' works only in browsers.
// In Node.js, you can use 'console.log()' instead.


// ===============================
// 🌟 Variable Examples
// ===============================

let name = "neeraj";   // String → text type data
let age = 24;          // Number → integer type data
let haveYouDoneYourVaccination = true; // Boolean → true or false
let state;             // Undefined → value not given yet

/*
🧠 Meaning:
- String → words or text inside quotes " "
- Number → any numeric value (integer or decimal)
- Boolean → true or false
- Undefined → declared but not given a value
*/


// ===============================
// 🌟 Extra Data Types (we will learn later)
// ===============================
// Symbol → used for unique values
// Null   → means “nothing” or empty value
// Object → used to store key-value pairs


// ===============================
// 🌟 typeof Operator
// ===============================
// 'typeof' tells the data type of a variable

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // ⚠️ "object" (this is a JS bug)

/*
🧠 Explanation:
- typeof undefined → gives "undefined"
- typeof null → gives "object" (this is a known issue in JS)
*/


/*
=============================================
🧠 SHORT NOTES
=============================================

💡 JavaScript is a dynamic language:
   - It decides data type automatically when running the code.
   - You don’t have to declare types manually (like in C or Java).

💡 Common Data Types:
   1️⃣ String     → "Hello"
   2️⃣ Number     → 45 or 3.14
   3️⃣ Boolean    → true / false
   4️⃣ Undefined  → declared but not assigned
   5️⃣ Null       → empty or nothing
   6️⃣ Symbol     → unique values
   7️⃣ Object     → collection of key-value pairs

✅ typeof helps you check which type a variable has.

⚠️ typeof null → object (by mistake in JS engine)
=============================================
*/

// checking git add, commit and push commands (Git Practice)
