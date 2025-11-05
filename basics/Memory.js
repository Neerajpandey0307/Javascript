/*
=========================================================
📘 TOPIC: MEMORY IN JAVASCRIPT
=========================================================

🧠 JavaScript uses two main types of memory to store data:

1️⃣ Stack Memory → for Primitive types (String, Number, Boolean, etc.)
2️⃣ Heap Memory  → for Non-Primitive types (Object, Array, Function)
*/


// =====================================================
// 🌟 STACK MEMORY (used for PRIMITIVE types)
// =====================================================

let FirstElderWandOwner = "Dumbledore"; 
let SecondElderWandOwner = FirstElderWandOwner; 

// Changing SecondElderWandOwner
SecondElderWandOwner = "Harry";

console.log(FirstElderWandOwner); // "Dumbledore"
console.log(SecondElderWandOwner); // "Harry"

/*
🧠 Explanation:
- In Stack Memory → data is stored by VALUE.
- When you assign one variable to another (primitive type),
  it makes a COPY of that value.
- Changing the copy does NOT affect the original.

🎯 Example:
(FirstElderWandOwner) → "Dumbledore"
(SecondElderWandOwner) → copy made → changed to "Harry"
Original stays same.
*/


// =====================================================
// 🌟 HEAP MEMORY (used for NON-PRIMITIVE / REFERENCE types)
// =====================================================

let ElderWand = {
  owner: "Albus Dumbledore",
  gender: "wizard"
};

let LatestOwner = ElderWand; // Reference (points to same memory)

LatestOwner.owner = "Harry Potter"; // change made through reference

console.log(ElderWand);
console.log(LatestOwner);

/*
🧠 Explanation:
- In Heap Memory → data is stored by REFERENCE (address).
- When you assign an object/array/function to another variable,
  both variables point to the SAME memory location.
- Changing one affects the other.

🎯 Example:
ElderWand and LatestOwner both point to the same object in memory.
So when you change LatestOwner.owner → ElderWand.owner also changes.
*/


// =====================================================
// 🌟 SIMPLE VISUAL EXAMPLE (Memory Difference)
// =====================================================

/*
STACK (Primitive)
-----------------------------------
FirstElderWandOwner → "Dumbledore"
SecondElderWandOwner → "Harry" (copy made)

HEAP (Non-Primitive)
-----------------------------------
ElderWand → { owner: "Harry Potter", gender: "wizard" }
LatestOwner → same reference → points to ElderWand
*/


// =====================================================
// 🧠 SHORT NOTES
// =====================================================
/*
| Memory Type | Used For | Stores | Copy or Reference | Example |
|--------------|-----------|---------|------------------|----------|
| Stack        | Primitive | Value  | Copy (new value) | String, Number |
| Heap         | Non-Primitive | Reference (Address) | Reference (same memory) | Object, Array, Function |

💡 Tips:
✅ Primitive → Stored in Stack (copied)
✅ Non-Primitive → Stored in Heap (shared by reference)
✅ Changing a copy in Stack won’t affect the original
✅ Changing reference in Heap will affect both
=========================================================
*/
