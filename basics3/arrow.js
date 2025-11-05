/*
=====================================================
TOPIC: ARROW FUNCTIONS, "this" KEYWORD & METHOD USAGE
=====================================================
*/

// ---------------------------
// Corrected and clean object
// ---------------------------
const user = {
  username: "neeraj",
  price: 999,

  // method using regular function (good for using `this`)
  welcomeMessage: function () {
    // `this` here refers to the current object `user`
    console.log(`${this.username}, Welcome to the website`); // shows current username
    console.log(this); // prints the object context (user)
  },

  // method shorthand (same as above, cleaner)
  greet() {
    console.log(`Hello ${this.username}, nice to see you!`);
  }
};

user.welcomeMessage(); // call method -> shows "neeraj, Welcome..."
user.greet();           // call method -> "Hello neeraj..."

user.username = "pandey"; // change property
user.welcomeMessage();    // now shows "pandey, Welcome..."


// ---------------------------
// `this` in global / normal functions
// ---------------------------

function normalFunc() {
  // In non-strict mode global function, `this` is global object
  // In strict mode `this` is undefined.
  // When called as normal function, `this.username` is usually undefined.
  console.log(this && this.username); // usually undefined in strict mode
}
normalFunc(); // not useful for reading object properties


// ---------------------------
// Arrow function and `this`
// ---------------------------

// Arrow functions DO NOT have their own `this`.
// They capture `this` from the surrounding (lexical) scope.
// So arrow functions are NOT good as object methods when you need `this`.

const arrowMethodExample = () => {
  // `this` here is inherited from outer scope (not the object)
  console.log(this && this.username); // undefined in most cases
};
arrowMethodExample();


// ---------------------------
// Arrow functions examples
// ---------------------------

// normal arrow with block body and return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 6)); // 9

// implicit return (concise body) — no curly braces, direct expression
const implicitReturn = (num1, num2) => num1 + num2;
console.log(implicitReturn(4, 4)); // 8

// implicit return with parentheses — common in React or clarity
const anotherImplicitReturn = (num1, num2) => (num1 + num2);
console.log(anotherImplicitReturn(2, 3)); // 5

// return object with implicit return — MUST wrap object in parentheses
const returnObject = (num1, num2) => ({ username: "neeraj" });
console.log(returnObject(3, 4)); // { username: "neeraj" }


// ---------------------------
// Array iteration example (forEach)
// ---------------------------
const myArray = [2, 5, 3, 7, 8];

// forEach takes a callback (item, index, array)
myArray.forEach((item, index) => {
  console.log("index:", index, "value:", item);
});

// map example (returns new array)
const doubled = myArray.map((x) => x * 2);
console.log(doubled); // [4,10,6,14,16]

// filter example (returns subset)
const biggerThan4 = myArray.filter((x) => x > 4);
console.log(biggerThan4); // [5,7,8]

// reduce example (accumulate)
const sum = myArray.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // total sum
