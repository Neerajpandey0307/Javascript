/*
==================================================
📘 TOPIC: CONTROL FLOW (if / else / else if)
==================================================

🧠 Control Flow means — code runs based on conditions.
We can decide which block of code should execute.
*/


// ===============================
// 🌟 Simple if / else
// ===============================
const isUserLoggedIn = true;
const temperature = 41;

if (temperature >= 50) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("executed");
// <, >, <=, >=, ==, !=, ===, !== are comparison operators

/*
🧠 Notes:
- if → checks a condition
- else → runs when if is false
- Comparison operators decide logic
- == compares value only
- === compares value + type
*/


// ===============================
// 🌟 if with block scope (let / const)
// ===============================
const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`user power: ${power}`);
}

// console.log(power); ❌ Error → power not available outside if block
/*
🧠 Variables made with let/const inside if {} 
   only work inside that block (block scope).
*/


// ===============================
// 🌟 Implicit (short) if statement
// ===============================
const balance = 100;

// You can write single-line if without braces
// if (balance > 500) console.log("test"), console.log("test2"); // ❌ not good practice

// Better use braces for readability
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

/*
🧠 Notes:
- else if chain runs one by one
- First true condition executes, rest are skipped
*/


// ===============================
// 🌟 Logical Operators (&& and ||)
// ===============================
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// && (AND) → all conditions must be true
if (userLoggedIn && debitCard) {
  console.log("Allow to buy coffee");
}

// || (OR) → any one condition true is enough
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User is authenticated");
}

/*
🧠 Notes:
&& (AND)  → True only if both sides are true
|| (OR)   → True if any one side is true
! (NOT)   → Reverses true/false value
*/


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Operator | Name | Example | Meaning |
|-----------|------|----------|----------|
| <         | less than | x < 5 | true if x smaller |
| >         | greater than | x > 5 | true if x bigger |
| <=        | less or equal | x <= 5 | true if x ≤ 5 |
| >=        | greater or equal | x >= 5 | true if x ≥ 5 |
| ==        | equal (loose) | "5" == 5 | true |
| ===       | equal (strict) | "5" === 5 | false |
| !=        | not equal | x != 5 | true if not equal |
| !==       | strict not equal | "5" !== 5 | true |

| Logical | Symbol | Meaning |
|----------|---------|----------|
| AND      | &&      | both true |
| OR       | ||      | one true |
| NOT      | !       | reverse |

💡 Tips:
✅ Always use `===` instead of `==` (strict check)
✅ Use curly braces `{}` even for one-line ifs for clarity
✅ Block scope (let/const) only inside {}
✅ Combine conditions using && or ||
==================================================
*/
