/*
=====================================================
📘 OBJECTS: CREATE · NEST · MERGE · UTILS · DESTRUCTURE
=====================================================
*/

// 1) Create object — different ways
const wizard = new Object(); // constructor style
const tinderUser = {};       // literal style

tinderUser.id = "123abc";
tinderUser.name = "neeraj";
tinderUser.isLoggedIn = true;

// 2) Nested object (object inside object)
const regularUser = {
  email: "neerajpandey@google.com",
  fullname: {
    userFullName: {
      firstname: "neeraj",
      lastname: "pandey"
    }
  }
};
// Access nested value:
console.log(regularUser.fullname.userFullName.firstname); // "neeraj"

// 3) Merge objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// Object.assign (creates new object by copying)
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// Spread (modern & cleaner)
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

// 4) Array of objects (common from APIs / DB)
const users = [
  { id: 1, email: "a@gmail.com" },
  { id: 2, email: "b@gmail.com" },
  { id: 3, email: "c@gmail.com" }
];
// Change email of 2nd user:
users[1].email = "p@gmail.com";
console.log(users[1]);

// 5) Object utility methods
console.log(Object.keys(tinderUser));    // ["id","name","isLoggedIn"]
console.log(Object.values(tinderUser));  // ["123abc","neeraj", true]
console.log(Object.entries(tinderUser)); // [ ["id","123abc"], ["name","neeraj"], ... ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
// hasOwnProperty checks if the object directly has that key

// 6) Destructuring (grab values quickly)
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

// rename while destructuring
const { courseInstructor: instructor } = course;
console.log(instructor); // "hitesh"

// 7) Quick notes / tips
/*
- Use object literal {} most of the time.
- Use nested objects for structured data (user.profile.name).
- Object.assign({}, a, b) or {...a, ...b} merges objects.
- Arrays of objects are common from APIs. To change an item: users[index].prop = value
- Object.keys/values/entries turn object into arrays for loops or mapping.
- hasOwnProperty prevents reading prototype keys.
- Destructuring makes code shorter and clearer.
*/

// 8) Example of API JSON (how it looks)
const apiExample = {
  name: "neeraj",
  courseName: "js in hindi",
  price: "free"
};
console.log(apiExample);
