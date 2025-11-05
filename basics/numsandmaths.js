/*
==================================================
📘 TOPIC: NUMBERS & MATH IN JAVASCRIPT
==================================================
*/

// ===============================
// 🌟 NUMBERS
// ===============================

const score = 100; // normal number

// Another way to declare number (using Number object)
const balance = new Number(100);
console.log(balance); // [Number: 100]


// 🌟 Number Methods
console.log(balance.toString().length); // converts to string, shows length → 3
console.log(balance.toFixed(2)); // fixes decimal points → "100.00"


// 🌟 toPrecision()
const otherNumber = 123.499;
console.log(otherNumber.toPrecision(4)); // "123.5"
// Rounds to given number of digits


// 🌟 toLocaleString()
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" → Indian format


/*
🧠 Short Notes:
- .toString() → converts number to string
- .toFixed(n) → keeps n digits after decimal
- .toPrecision(n) → rounds number with total n digits
- .toLocaleString('en-IN') → adds commas in Indian format
*/


// ===============================
// 🌟 MATH OBJECT
// ===============================

console.log(Math); // shows all math functions

// 🌟 Common Math Methods
console.log(Math.abs(-4));    // 4  → converts negative to positive
console.log(Math.round(4.7)); // 5  → rounds to nearest integer
console.log(Math.ceil(4.2));  // 5  → always rounds up
console.log(Math.floor(4.9)); // 4  → always rounds down
console.log(Math.min(5, 2, 4, 1, 0)); // 0  → smallest value
console.log(Math.max(5, 32, 2, 5));   // 32 → largest value

/*
🧠 Short Notes:
- Math.abs(x) → absolute (no negative)
- Math.round(x) → nearest integer
- Math.ceil(x) → round UP
- Math.floor(x) → round DOWN
- Math.min(...) → smallest value
- Math.max(...) → biggest value
*/


// ===============================
// 🌟 RANDOM NUMBER
// ===============================

// Random number between 0 and 1
console.log(Math.random());

// Random number between 0 and 10
console.log(Math.random() * 10);

// Random number between 1 and 10
console.log((Math.random() * 10) + 1);

// Random number between min and max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
🧠 Explanation:
- Math.random() → gives number between 0 and 1
- Multiply by 10 → gives number between 0–10
- Add +1 → ensures we never get 0
- Formula: 
  Math.floor(Math.random() * (max - min + 1)) + min
  → random number between min & max
*/


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Concept / Method             | Example                              | Result / Use                          |
|------------------------------|--------------------------------------|---------------------------------------|
| Number()                     | new Number(100)                      | Creates Number object                 |
| toString()                   | (100).toString()                     | "100"                                 |
| toFixed(2)                   | (100).toFixed(2)                     | "100.00"                              |
| toPrecision(4)               | 123.499.toPrecision(4)               | "123.5"                               |
| toLocaleString('en-IN')      | 1000000 → "10,00,000"                | Indian format                         |
| Math.abs(-4)                 | 4                                    | Absolute value                        |
| Math.round(4.6)              | 5                                    | Nearest integer                       |
| Math.ceil(4.2)               | 5                                    | Round up                              |
| Math.floor(4.9)              | 4                                    | Round down                            |
| Math.min(5,2,1)              | 1                                    | Smallest value                        |
| Math.max(5,10,3)             | 10                                   | Largest value                         |
| Math.random()                | —                                    | Random 0–1                            |
| Formula (min–max)            | floor(random()*(max-min+1))+min      | Random in range                       |

💡 Tip:
✅ Always use Math.floor() with Math.random() for integers
✅ Use toFixed() for decimal formatting
==================================================
*/
