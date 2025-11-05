/*
==================================================
📘 TOPIC: ARRAY COMBINATION & USEFUL METHODS
==================================================
*/

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// ===============================
// 🌟 push() — adds another array as a single element
// ===============================
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // "batman"

// 🧠 Explanation:
// push() will add dc_heros inside marvel_heros as one element → nested array
// Not recommended for merging arrays


// ===============================
// 🌟 concat() — merges two arrays (creates a new one)
// ===============================
// const merge = marvel_heros.concat(dc_heros);
// console.log(merge);

// 🧠 Explanation:
// concat() joins two arrays and returns a new combined array.
// Original arrays stay unchanged.


// ===============================
// 🌟 Spread Operator (Modern Way)
// ===============================
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

/*
🧠 Spread Operator:
- '...' spreads (unpacks) array values.
- Easiest way to merge multiple arrays.
*/


// ===============================
// 🌟 Flat() — remove nested arrays (make one single array)
// ===============================
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

/*
🧠 flat(Infinity):
- Removes all levels of nested arrays.
- Infinity → means flatten completely.
*/


// ===============================
// 🌟 Array.isArray()
// ===============================
console.log(Array.isArray("neeraj")); // false

/*
🧠 Checks if given data is an array.
- Returns true or false.
*/


// ===============================
// 🌟 Array.from()
// ===============================
console.log(Array.from("neeraj")); // ['n','e','e','r','a','j']

// ⚠️ IMPORTANT:
console.log(Array.from({ name: "neeraj" })); // [] empty array

/*
🧠 Explanation:
- Array.from() converts other data types into arrays.
- Works well with strings or array-like objects.
- For objects, JS doesn’t know if you want keys or values — you must specify manually.
*/


// ===============================
// 🌟 Array.of()
// ===============================
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

/*
🧠 Array.of():
- Makes a new array from given values.
- Used to create arrays directly from variables or numbers.
*/


/*
==================================================
🧠 SHORT SUMMARY
==================================================

| Method / Concept | Example | Use / Meaning |
|------------------|----------|----------------|
| push()           | arr1.push(arr2) | Adds array as one element (nested) |
| concat()         | arr1.concat(arr2) | Combines arrays (new array) |
| spread (...)     | [...arr1, ...arr2] | Combines arrays easily (modern way) |
| flat()           | arr.flat(Infinity) | Removes nested arrays |
| isArray()        | Array.isArray([]) | Checks if data is array |
| from()           | Array.from("abc") | Converts string to array |
| of()             | Array.of(1,2,3) | Creates array from given values |

💡 Tips:
✅ Use spread `...` instead of concat() (cleaner & modern)
✅ flat(Infinity) → makes deep nested arrays flat
✅ Array.from() → good for strings
✅ Array.of() → good for variable to array conversion
==================================================
*/
