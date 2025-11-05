/*
=========================================================
📘 TOPIC: PRIMITIVE DATA TYPES (Call by Value)
=========================================================

🧠 Meaning:
Primitive types are simple data types.
When you copy or pass them, their VALUE is copied — not the original variable.

That’s why they are also called "Call by Value".
*/

// 7 Types: String , Number , Boolean , Null , Undefined , Symbol , BigInt


// ===============================
// 🌟 STRING
// ===============================
const NameOfSoldier = "Neeraj"; // String → text data inside quotes
// Example: "Hello", "123", "Neeraj"

// ===============================
// 🌟 NUMBER
// ===============================
const ScoreInProbation = 92; // Number → integer
const AccurateScoreInProbation = 92.4; // Number → float (decimal)

// Note: In JS, both integer and float are considered Number type.


// ===============================
// 🌟 BOOLEAN
// ===============================
const DoesSoldierClearProbation = true; // Boolean → true or false


// ===============================
// 🌟 NULL
// ===============================
const SoldierParentCompany = null; // Null → empty or nothing
// Means variable is intentionally empty


// ===============================
// 🌟 UNDEFINED
// ===============================
let SoldierCompanyInParaSf; // Undefined → declared but not given any value
// JS automatically assigns "undefined"


// ===============================
// 🌟 SYMBOL
// ===============================
const DoesSoldierGetsMaroonBeret = Symbol('YES'); 
// Symbol → creates a unique value (even if text is same)
// Useful when you want to make a variable 100% unique


// ===============================
// 🌟 BIGINT
// ===============================
const SoldierTemporaryId = 9876532343222n;
// BigInt → for storing very large numbers (bigger than normal Number can handle)


// ===============================
// 🌟 PRINTING ALL VALUES
// ===============================
console.table([
  NameOfSoldier,
  ScoreInProbation,
  AccurateScoreInProbation,
  DoesSoldierClearProbation,
  SoldierParentCompany,
  SoldierCompanyInParaSf,
  DoesSoldierGetsMaroonBeret,
  SoldierTemporaryId
]);

/*
🧠 Explanation:
- console.table() prints data in a table format (easy to read).
- All above are PRIMITIVE data types.
- When you copy these values → only the VALUE is copied (not the original variable).
*/


/*
=========================================================
🧠 SHORT NOTES:
=========================================================

| Data Type | Example | Meaning |
|------------|----------|----------|
| String | "Neeraj" | Text or words |
| Number | 92, 92.4 | Numeric value (integer or float) |
| Boolean | true / false | Yes or No type value |
| Null | null | Empty or nothing |
| Undefined | let x; | Declared but not assigned |
| Symbol | Symbol("YES") | Unique and special value |
| BigInt | 1234567890123456789n | Large numbers |

💡 Tips:
✅ Primitive = stored by VALUE
✅ Simple, fixed-size data
✅ typeof null → "object" (JS bug)
✅ typeof undefined → "undefined"
=========================================================
*/
