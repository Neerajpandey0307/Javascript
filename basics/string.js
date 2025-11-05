/*
==================================================
📘 TOPIC: STRINGS IN JAVASCRIPT
==================================================
*/

// ===============================
// 🌟 Declaring Strings
// ===============================
const name = "neeraj";
const repoCount = 50;

// ❌ Old (not recommended)
console.log(name + repoCount + " value");

// ✅ New (correct way using Template Literals)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);
// Backticks `` → allow variables inside ${}


// ===============================
// 🌟 Another way to create string (using String object)
const anotherName = new String("neeraj-pandey-com");
console.log(anotherName);

// ===============================
// 🌟 Accessing values & properties
console.log(anotherName[0]); // n → access character using index
console.log(anotherName.length); // 17 → total characters
console.log(anotherName.toUpperCase()); // "NEERAJ-PANDEY-COM"
console.log(anotherName.charAt(2)); // e → character at position 2
console.log(anotherName.indexOf('j')); // 4 → index of character 'j'


// ===============================
// 🌟 substring()
const newString = anotherName.substring(0, 4);
console.log(newString); // "neer"
// (from index 0 to 3 → last index not included)


// ===============================
// 🌟 trim()
const newStringOne = "    neeraj    ";
console.log(newStringOne);       // "    neeraj    "
console.log(newStringOne.trim()); // "neeraj" → removes spaces

/*
🧠 .trim() removes spaces from start & end only
*/


// ===============================
// 🌟 replace() and includes()
const url = "https://neeraj.com/neeraj%20pandey";

console.log(url.replace('%20', '-')); // replaces %20 with -
console.log(url.includes('z')); // false → checks if character/word exists


// ===============================
// 🌟 split()
console.log(anotherName.split('-'));
// ["neeraj", "pandey", "com"]

/*
🧠 split() → breaks string into array using given separator
*/


// ===============================
// 🌟 Example
const neeraj = "student-in-power";
console.log(neeraj.length); // 16
console.log(neeraj.split('-')); // ["student", "in", "power"]


/*
==================================================
🧠 SHORT NOTES
==================================================

| Method / Property   | Example | Output / Use |
|----------------------|---------|---------------|
| length               | name.length | gives total characters |
| toUpperCase()        | name.toUpperCase() | converts to capital letters |
| charAt(n)            | name.charAt(2) | character at index n |
| indexOf()            | name.indexOf('r') | finds index of character |
| substring(a,b)       | name.substring(0,4) | string from a to b-1 |
| trim()               | "  hi  ".trim() | removes extra spaces |
| replace(a,b)         | str.replace('%20','-') | replaces value |
| includes(value)      | str.includes('z') | checks if value exists |
| split(separator)     | str.split('-') | breaks string into array |

💡 Tips:
✅ Always use backticks (``) for modern string writing.
✅ Strings are immutable → cannot change original directly.
✅ Use trim() to clean spaces from input fields.
==================================================
*/
