/*
==================================================
📘 TOPIC: SWITCH STATEMENT IN JAVASCRIPT
==================================================

🧠 Use:
Switch statement is used when you have **many conditions**
to check for a single value (like month, day, grade, etc.)

It is cleaner than using multiple if...else if...else blocks.
*/

// ===============================
// 🌟 Example
// ===============================
const month = "3"; // can be number or string

switch (month) {
  case "1":
    console.log("January");
    break; // stop further execution once matched

  case "2":
    console.log("February");
    break;

  case "3":
    console.log("March");
    break;

  case "4":
    console.log("April");
    break;

  default:
    console.log("Not cool"); // runs if no match found
    break;
}

/*
🧠 Explanation:
1️⃣ `switch (month)` → compares value of month with each case.
2️⃣ `case "1":` → if matches, runs the code below it.
3️⃣ `break` → stops switch from running next cases.
   ⚠️ Without break → all next cases will run (called fall-through).
4️⃣ `default` → like "else", runs if no case matches.
*/


// ===============================
// 🌟 Without break (fall-through example)
// ===============================

const day = "2";

switch (day) {
  case "1":
    console.log("Monday");
  case "2":
    console.log("Tuesday"); // matched, prints
  case "3":
    console.log("Wednesday"); // continues (no break!)
  default:
    console.log("Other day"); // keeps going
}

/*
🧠 Output:
Tuesday
Wednesday
Other day

Because there was no break statement after "2"
*/


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Keyword | Meaning |
|----------|----------|
| switch(value) | start comparing the given value |
| case | each possible value to check |
| break | stop further checking |
| default | runs when no case matches |

💡 Tips:
✅ Always use break after each case
✅ default works like “else”
✅ Works with numbers, strings, and expressions
✅ Cleaner than multiple if/else chains
==================================================
*/
