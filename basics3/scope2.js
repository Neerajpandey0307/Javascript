/*
=========================================
📘 TOPIC: NESTED SCOPE, BLOCK SCOPE & HOISTING
=========================================
*/

// 🌟 NESTED SCOPE (Parent → Child)

function one() {                 // (parent function)
  const username = "neeraj";

  function two() {               // (child function)
    const website = "youtube";
    console.log(username);       // ✅ child can use parent variable
  }

  // console.log(website);       // ❌ Error: website not in parent
  two();                         // calling child from parent
}

one(); // run the parent function

/*
🧠 Meaning:
- Function two() is inside function one().
- The child (two) can use the parent’s variable (username).
- But the parent (one) cannot use the child’s variable (website).
*/


// ===============================
// 🌟 BLOCK SCOPE (inside { })
// ===============================

if (true) {
  const username = "neeraj";      // (outer block)

  if (username === "neeraj") {
    const website = "youtube";    // (inner block)
    console.log(username + website); // ✅ works → neerajyoutube
  }

  // console.log(website);         // ❌ Error: website is only in inner block
}

// console.log(username);          // ❌ Error: username is only in if block

/*
🧠 Meaning:
- Each { } is its own small world (block).
- let and const only live inside that block.
- You cannot use them outside that block.
*/


// ===============================
// 🌟 FUNCTION HOISTING
// ===============================

// ✅ Function Declaration (Hoisted)
console.log(addOne(5)); // ✅ Works before definition → 6

function addOne(num) {             // (normal function)
  return num + 1;
}

/*
🧠 Meaning:
- Normal (declared) functions move to the top automatically.
- You can call them even before writing them.
*/


// ❌ Function Expression (Not Hoisted)
// console.log(addTwo(5)); // ❌ Error: Cannot access before initialization

const addTwo = function (num) {   // (function stored in variable)
  return num + 2;
};

console.log(addTwo(5)); // ✅ Works if called after definition → 7

/*
🧠 Meaning:
- Function expressions are like normal variables.
- You can only use them after writing them.
*/


// ===============================
// 🌟 EXECUTION CONTEXT (Short Note)
// ===============================
/*
When JavaScript runs your file, it does two steps:

1️⃣ Memory Phase:
   - Saves variables and functions in memory.
   - Normal functions move to top (hoisted).
   - let and const stay in a waiting area (TDZ - temporal dead zone).

2️⃣ Code Phase:
   - Runs code line by line.
   - Calls functions when needed.
*/


// ===============================
// 🧠 SIMPLE SUMMARY
// ===============================
/*
| Concept           | Simple Meaning                                          |
|-------------------|----------------------------------------------------------|
| Nested Scope      | (child) can use (parent)’s variable                     |
| Block Scope       | let/const live only inside { } block                    |
| Function Hoisting | Normal (declared) functions move to top automatically   |

💡 Tips:
✅ Use 'let' and 'const' (not var)
✅ Function Declaration → can call anytime
❌ Function Expression → call after making it
✅ (child) can use (parent)’s variable, not the other way around
=========================================
*/
