/*
=========================================
📘 TOPIC: TYPE CONVERSION & OPERATIONS
=========================================
*/

// 🌟 1️⃣ STRING → NUMBER
let score = "33"; // score is a string

// console.log(typeof score); // string

let valueInNumber = Number(score); // convert string to number

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 33

/*
🧠 Meaning:
- "33" (text) becomes 33 (number)
- Number("33") changes string into number
*/


// 🌟 2️⃣ STRING → BOOLEAN
let valueInBoolean = Boolean(score);

console.log(valueInNumber, valueInBoolean); // 33 true

/*
🧠 Meaning:
- Boolean("33") → true (because string is not empty)
- Boolean("") → false (empty string)
- Boolean(0) → false
- Boolean(1) → true
*/


// ===============================
// 🌟 3️⃣ OPERATORS (Math work in JS)
// ===============================
let value = 3;
let negValue = -value;

console.log(negValue); // -3

/*
🧠 Meaning:
- Adding (-) sign makes number negative
*/


// ➕ ➖ ✖️ ➗ 🔢 Arithmetic Operators
console.log(2 + 2);  // 4  (Add)
console.log(2 - 2);  // 0  (Subtract)
console.log(2 * 2);  // 4  (Multiply)
console.log(2 ** 2); // 4  (Power)
console.log(2 / 2);  // 1  (Divide)
console.log(2 % 2);  // 0  (Remainder)

/*
🧠 Quick list:
+  → Add
-  → Subtract
*  → Multiply
** → Power (example: 2 ** 3 = 8)
%  → Gives remainder after division
*/


// ===============================
// 🌟 4️⃣ STRING COMBINE (Concatenation)
// ===============================
let str1 = "hello";
let str2 = " neeraj";

let str3 = str1 + str2;
console.log(str3); // "hello neeraj"

/*
🧠 Meaning:
- '+' joins two strings together
*/


// ===============================
// 🌟 5️⃣ MIXING STRINGS AND NUMBERS
// ===============================
console.log(1 + "2");     // "12"
console.log("1" + 2);     // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

/*
🧠 Meaning:
- If string comes first → everything becomes string
- If number comes first → numbers add first, then convert to string
*/


// ===============================
// 🌟 6️⃣ SIMPLE MATH EXAMPLE
// ===============================
console.log((3 + 4) * 5 % 3);

/*
🧠 Meaning:
1. (3 + 4) = 7
2. 7 * 5 = 35
3. 35 % 3 = 2 (remainder)
*/


// ===============================
// 🌟 7️⃣ UNARY OPERATOR
// ===============================
console.log(+true);  // 1
console.log(+false); // 0

/*
🧠 Meaning:
- '+' converts true → 1 and false → 0
*/


/*
===============================================
🧠 QUICK SUMMARY (Short Notes)
===============================================

| Concept                | Example          | Result / Meaning                   |
|------------------------|------------------|------------------------------------|
| String → Number        | Number("33")     | 33                                 |
| String → Boolean       | Boolean("Hi")    | true                               |
| Empty String → Boolean | Boolean("")      | false                              |
| Number → Boolean       | Boolean(0)       | false                              |
|                        | Boolean(1)       | true                               |
| Add (+)                | 2 + 2            | 4                                  |
| Power (**)             | 2 ** 3           | 8                                  |
| Remainder (%)          | 5 % 2            | 1                                  |
| +true / +false         | +true            | 1                                  |
| String + Number        | "1" + 2          | "12" (string)                      |

💡 Tips:
✅ Always check type using typeof
✅ Be careful mixing strings and numbers
✅ "true" → 1 , "false" → 0 when converted
===============================================
*/
