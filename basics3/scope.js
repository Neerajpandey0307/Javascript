// 🌍 Global Scope
let a = 100; // This variable is in the global scope

if (true) {
  // 🧱 Block Scope
  let a = 10;     // This 'a' exists only inside this block
  const b = 20;   // 'b' also exists only inside this block

  console.log("inner", a); // inner 10
}

// Outside the block
console.log(a); // 100
// console.log(b); // ❌ Error: b is not defined

/*
-----------------------------------------------
📘 EXPLANATION:

1️⃣ Global Scope:
   - Variables declared outside any block or function.
   - Can be accessed anywhere in the program.

2️⃣ Block Scope:
   - Variables declared with 'let' or 'const' inside { }.
   - They exist only within that block.
   - You cannot access them outside.

3️⃣ Variable Shadowing:
   - If you declare a variable with the same name inside a block,
     it temporarily hides (shadows) the outer one.
   - Example:
       outer 'a' = 100
       inner 'a' = 10
     Inside block → inner 'a' used
     Outside block → outer 'a' used
-----------------------------------------------
*/


// ⚠️ Example showing why we avoid 'var'

var c = 300; // Global Scope

if (true) {
  var c = 30; // Changes the same variable even inside block
  console.log("inner", c); // inner 30
}

console.log("outer", c); // outer 30 😲 Changed globally!

/*
-----------------------------------------------
🚫 Why we don't use 'var':
   - 'var' does not support block scope.
   - It leaks outside the block and can accidentally
     overwrite global or function-level variables.
   - Can cause unexpected bugs.

✅ Always use:
   - 'let' → when the value may change
   - 'const' → when the value must remain constant
-----------------------------------------------
*/
/*
-----------------------------------------------
📘 TYPES OF SCOPE IN JAVASCRIPT
-----------------------------------------------
1️⃣ Global Scope
2️⃣ Local / Function Scope
3️⃣ Block Scope
4️⃣ Lexical Scope (Closure Concept)
-----------------------------------------------
*/

// 🌍 1️⃣ GLOBAL SCOPE
// Variables declared outside any block or function
// are global and can be accessed anywhere.

let globalVar = "I am Global";

function showGlobal() {
  console.log(globalVar); // ✅ Accessible here
}

showGlobal();
console.log(globalVar); // ✅ Accessible here too



// 🧩 2️⃣ FUNCTION (LOCAL) SCOPE
// Variables declared inside a function
// can only be accessed inside that function.

function localScopeExample() {
  let localVar = "I am Local";
  console.log(localVar); // ✅ Works here
}

// localScopeExample();
// console.log(localVar); // ❌ Error: localVar is not defined



// 🧱 3️⃣ BLOCK SCOPE
// Variables declared with 'let' or 'const'
// inside { } exist only within that block.

if (true) {
  let blockVar = "I am Block Scoped";
  const anotherBlock = "Me too!";
  console.log(blockVar);      // ✅ Works
  console.log(anotherBlock);  // ✅ Works
}

// console.log(blockVar); // ❌ Error: blockVar is not defined



// 🧠 4️⃣ LEXICAL SCOPE (Closures)
// Inner functions can access variables
// from their outer (parent) functions.

function outerFunction() {
  let outerVar = "Outer Variable";

  function innerFunction() {
    console.log(outerVar); // ✅ Can access parent variable
  }

  innerFunction();
}

outerFunction();

/*
-----------------------------------------------
✅ SUMMARY TABLE:

| Type of Scope   | Declared Inside | Accessible Where?                   |
|-----------------|----------------|-------------------------------------|
| Global Scope    | Outside all     | Everywhere in the program           |
| Function Scope  | Inside function | Only inside that function           |
| Block Scope     | Inside { }      | Only inside that block              |
| Lexical Scope   | Nested function | Inner can access outer variables    |
-----------------------------------------------

💡 NOTE:
- Use `let` and `const` for block scope.
- Avoid `var` because it ignores block scope.
-----------------------------------------------
*/