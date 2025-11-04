const wizard = new Object() // another method to declare a object . singleton



const tinderUser={}
tinderUser.id ="123abc"
tinderUser.name="neeraj"
tinderUser.isLoggedIn= true

// console.log(tinderUser)


// OBJECT IN OBJECT

const regularUser ={
    email : "neerajpandey@google.com",
    fullname: {  //nested object
        userFullName:{ // we can make as many nested object under an object
            firstname : "neeraj",
            lastname: "pandey"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname)
// thats how we acess the nested object in object

// merging objects

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"a" , 4:"b"}
const obj3 ={5:"a" , 6:"b"}

// ASSIGN 

const obj4 =Object.assign({},obj1,obj2,obj3) // this is assign method to merge a object
// console.log(obj4)

// spread method
const obj5 = {...obj1, ...obj2, ...obj3}// spead method to join a object
// console.log(obj5)