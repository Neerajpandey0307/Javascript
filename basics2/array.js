/*
====================================================
📘 TOPIC: ARRAYS IN JAVASCRIPT
====================================================

🧠 Array → A collection of items stored in a single variable.
We can store numbers, strings, or mixed data types inside arrays.
*/

// ===============================
// 🌟 Declaring an Array
// ===============================
const myArr = [-1, 0, 1, 2, 3, 4, 5];
console.log(myArr);

// Accessing array elements
console.log(myArr[0]); // -1 → first element
console.log(myArr[3]); // 2  → fourth element


// ===============================
// 🌟 Copying and Reassigning Arrays
// ===============================
let wizard = ["Harry", "Sirius"];
let aliveWizard = wizard; // points to same reference (Heap Memory)

aliveWizard = ["Harry"]; // new array created (different reference)
console.log(wizard);       // ["Harry", "Sirius"]
console.log(aliveWizard);  // ["Harry"]

/*
🧠 Explanation:
If you assign a new array → it breaks reference.
But if you modify the same array, both change.
*/


// ===============================
// 🌟 ARRAY METHODS
// ===============================

// Add elements
myArr.push(6);  // adds 6 at end
myArr.push(-2); // adds -2 at end

// Remove last element
myArr.pop(); // removes last element

// Add element at start (slower)
myArr.unshift(9); // adds 9 at beginning
// Remove element from start
myArr.shift(); // removes first element

console.log(myArr);

/*
🧠 Notes:
.push() → add at end
.pop() → remove from end
.unshift() → add at start (slow for big arrays)
.shift() → remove from start
*/


// ===============================
// 🌟 Check and Find Values
// ===============================
console.log(myArr.includes(9)); // false → 9 not in array
console.log(myArr.indexOf(2));  // 3 → index of value 2


// ===============================
// 🌟 SLICE and SPLICE
// ===============================

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, "ten"];
console.log(number);

/*
🔹 slice() → makes a COPY of selected part (does NOT change original)
🔹 splice() → REMOVES or ADDS elements (changes original array)
*/

// slice()
console.log(number.slice(0, 5)); 
// takes values from index 0 to 4 (5 excluded)
console.log(number); // original remains same

// splice()
console.log(number.splice(0, 5)); 
// removes first 5 elements (index 0–4)
console.log(number); // original changed

/*
🧠 Notes:
- slice(start, end) → copy part of array → original not changed
- splice(start, deleteCount) → remove part → original changed
*/


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Method | Use | Changes Original? | Example |
|---------|-----|-------------------|----------|
| push() | Add at end | ✅ Yes | arr.push(10) |
| pop() | Remove last | ✅ Yes | arr.pop() |
| unshift() | Add at start | ✅ Yes | arr.unshift(5) |
| shift() | Remove first | ✅ Yes | arr.shift() |
| includes() | Check if value exists | ❌ No | arr.includes(2) |
| indexOf() | Find index of value | ❌ No | arr.indexOf(3) |
| slice() | Copy part of array | ❌ No | arr.slice(1,4) |
| splice() | Remove or add values | ✅ Yes | arr.splice(2,3) |

💡 Tips:
✅ Use slice() if you want to keep original array safe  
✅ splice() changes the real array  
✅ Arrays are stored in Heap (non-primitive)
====================================================
*/
