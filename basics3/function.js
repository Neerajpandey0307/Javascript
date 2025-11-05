/*
==================================================
📘 TOPIC: FUNCTIONS IN JAVASCRIPT
==================================================

🧠 Function = A block of code that runs when called.
It helps reuse code and keep it organized.
*/


// ===============================
// 🌟 Simple function
// ===============================
function sayHello() {
  console.log("H");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("o");
}

sayHello(); // ✅ calling function


// ===============================
// 🌟 Function with parameters & arguments
// ===============================
function addTwoNumbers(num1, num2) { // num1, num2 → parameters
  console.log(num1 + num2);
}

addTwoNumbers(3, 4); // 3, 4 → arguments

/*
🧠 Parameters = placeholders inside function.
   Arguments = real values you give when calling.
*/


// ===============================
// 🌟 Using return keyword
// ===============================
function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result; // sends value back to caller
}

const result = addTwoNumbers(3, 4);
console.log("Result:", result);

/*
🧠 return stops function execution and gives a value back.
*/


// ===============================
// 🌟 Function with condition
// ===============================
function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username!!");
    return; // stop function if username not given
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("neeraj")); // neeraj just logged in
console.log(loginUserMessage()); // Please enter a username!!


/*
🧠 Notes:
- if (!username) → means "if username is empty/undefined"
- Always check parameters before using them
*/


// ===============================
// 🌟 Rest Operator (...)
// ===============================

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 230, 450, 44, 40));
// Output: [200, 230, 450, 44, 40]

/*
🧠 Rest operator (...) collects all extra values into an array.
*/


// 🌟 Rest operator with fixed parameters
function calculateCartPrice(val1, val2, ...num1) {
  return [val1, val2, ...num1];
}
console.log(calculateCartPrice(200, 230, 450, 44, 40));
// Output: [200, 230, 450, 44, 40]


// ===============================
// 🌟 Function with object as parameter
// ===============================
const user = {
  username: "neeraj",
  price: 33
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
  username: "Sam",
  price: 399
});

/*
🧠 Notes:
- We can pass entire object to function.
- Then access keys using anyobject.keyName
*/


// ===============================
// 🌟 Function with array as parameter
// ===============================
const newArray = [200, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(newArray));     // 400
console.log(returnSecondValue([200, 300, 400])); // 300

/*
🧠 Notes:
- Arrays are also passed to functions like objects.
- Use indexing to get specific elements.
*/


// ===============================
// 🧠 SHORT SUMMARY
// ===============================
/*
| Concept | Example | Meaning |
|----------|----------|----------|
| Function declaration | function add(){} | Create function |
| Function call | add() | Execute function |
| Parameter | (num1, num2) | Variable inside function |
| Argument | (3,4) | Value passed to function |
| return | return x+y | Sends back result |
| Rest operator (...) | (...num1) | Collects all values in array |
| Object as argument | handleObject(obj) | Pass full object |
| Array as argument | getArray(arr) | Pass full array |

💡 Tips:
✅ Use `return` when you need a result outside function  
✅ Use `...` (rest operator) to handle multiple inputs  
✅ Always check undefined inputs with `if (!value)`  
✅ Objects and Arrays can be passed directly
==================================================
*/
