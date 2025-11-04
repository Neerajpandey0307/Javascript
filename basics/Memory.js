// Memory

// Stack(Primitive) and Heap Memory(Non Primitive or Reference)

// @ STACK MEMORY - 


let FirstelderWandOwner = "dumbledor" 
let SecondelderWandOwner = FirstelderWandOwner
SecondelderWandOwner = "harry"

console.log(FirstelderWandOwner)
console.log(SecondelderWandOwner)

// @ heap memory 

let ElderWand = {
    owner : 'Albus Dumbledor',
    Gender : 'wizard'

}
let LatestOwner = ElderWand

LatestOwner.owner = "Harry Potter"

console.log(ElderWand)
console.log(LatestOwner)
