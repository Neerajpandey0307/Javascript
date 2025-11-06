/*
=====================================================
📘 TOPIC: IIFE (Immediately Invoked Function Expression)
=====================================================

🧠 Meaning:
IIFE = A function that runs immediately after it is created.

💡 Why we use it?
1️⃣ To avoid polluting the global scope (keep variables private).
2️⃣ To run some code immediately.
3️⃣ Common in database connections, setup code, etc.
*/

// ===============================
// 🌟 Normal Function
// ===============================
function coffee() {
  console.log(`DB CONNECTED`);
}
coffee(); // need to call separately

/*
🧠 Here, function `coffee()` is defined and then called later.
*/


// ===============================
// 🌟 IIFE (Immediately Invoked Function Expression)
// ===============================

(function iifeCoffee() {
  console.log("IIFE Function Executed Immediately");
})(); 
// ↑ function wrapped in () and then immediately called with ()

/*
🧠 How it works:
- Wrap function in parentheses → (function(){...})
- Immediately call it → ();
✅ Result: Executes immediately without manual call.
*/


// ===============================
// 🌟 Arrow Function IIFE
// ===============================
((name) => {
  console.log(`Hi ${name}, your IIFE arrow function is working properly`);
})("neeraj");

/*
🧠 Explanation:
- Same concept as normal IIFE, but with arrow function.
- You can pass arguments inside the final ( ) when invoking.
*/


// ===============================
// 🌟 Important Notes
// ===============================

/*
1️⃣ Syntax Rule:
   (function(){ ... })();
   OR
   (() => { ... })();

2️⃣ Why wrap inside ( ):
   Because `function` alone can’t be executed immediately
   unless it’s treated as an expression.
   () turns it into an *expression*, not a *declaration*.

3️⃣ Types of IIFE:
   - Named IIFE → (function myFunc(){ ... })();
   - Anonymous IIFE → (function(){ ... })();
   - Arrow IIFE → (() => { ... })();

4️⃣ Use Case Example:
   (() => {
     console.log("Connected to database automatically");
   })();
   // instantly runs and cleans up itself
*/


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Concept | Example | Use |
|----------|----------|-----|
| Normal Function | function coffee(){}; coffee(); | Define + call separately |
| IIFE | (function(){})() | Runs immediately |
| Arrow IIFE | (()=>{})() | Shorter syntax |
| Benefit | Keeps variables private, avoids global scope pollution |

💡 Tips:
✅ Always wrap IIFE in ( ) before calling.
✅ Add semicolon (;) before new IIFE if multiple IIFEs exist back-to-back.
✅ Useful for one-time setups (like DB connect, API calls).
=====================================================
*/
