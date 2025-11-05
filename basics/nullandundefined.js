/*
=============================================
📘 TOPIC: DIFFERENCE BETWEEN undefined & null
=============================================
*/

// 🌟 undefined → means variable is declared but value not given
let username;
console.log(username); // undefined
console.log(typeof username); // "undefined"

/*
🧠 Meaning:
- The variable 'username' is created,
  but we did not give it any value.
- JS automatically assigns "undefined" as its value.
*/


// 🌟 null → means empty or nothing
let user = null;
console.log(user); // null
console.log(typeof user); // "object" (⚠️ this is a JavaScript bug)

/*
🧠 Meaning:
- null is manually given by programmer
- It means “nothing” or “empty value”
- It’s not automatically assigned by JS
*/


// 🌟 Example Difference
let mobile;           // not given → undefined
let laptop = null;    // given empty value → null

console.log(mobile);  // undefined
console.log(laptop);  // null


/*
🧠 Easy Way to Remember:

| Feature         | undefined                          | null                         |
|-----------------|------------------------------------|------------------------------|
| Meaning         | variable declared, no value given  | variable has empty value     |
| Who gives value | JavaScript automatically            | You (programmer) manually    |
| typeof result   | "undefined"                        | "object" (known bug)         |
| Used for        | Missing value                      | Empty or cleared value       |

💡 Example use:
undefined → system didn’t get any value yet
null → we know it’s empty, not by mistake but by choice
*/


// 🌟 Example (real-life like)
let marks;             // not assigned yet → undefined
let userProfile = null; // user deleted → null

console.log("marks =", marks);         // undefined
console.log("userProfile =", userProfile); // null

/*
🧠 Meaning:
- marks → we haven’t assigned anything yet
- userProfile → we removed or cleared data
*/


/*
=============================================
🧠 SHORT NOTE:
=============================================
✅ undefined → JS ka kehna “value nahi mili”
✅ null → programmer ka kehna “value ko empty rakha hai”
✅ typeof null → "object" (bug but always same)
✅ typeof undefined → "undefined"
=============================================
*/
