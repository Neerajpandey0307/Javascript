//PRIMITIVE or AKA Call By Value

//7 Types : String , Number , Boolean , Null , Undefined ,symbol ,BigInt

const NameOfSoldier ="Neeraj" // String

const ScoreInProbation = 92 // Number
const AcurateScoreInProbation = 92.4 // Its also a Number datatype but this is in float , but in js we mark float integer's as Number datatype.

const DoesSoldierClearProbation = true // Boolean

const SoldierParentCompany = null // Null Datatype

let SoldierCompanyInParaSf; //Undifined Datatype

const DoesSoldierGetsMaroonBarey =Symbol('YES') // Symbol (it is a special type where we can mark our variable as special or unique)

const SoldierTemporaryId = 9876532343222n // BigInt (To store the large number of interger we use BigInt.)

console.table([NameOfSoldier ,ScoreInProbation ,AcurateScoreInProbation ,DoesSoldierClearProbation,SoldierParentCompany,SoldierCompanyInParaSf ,DoesSoldierGetsMaroonBarey,SoldierTemporaryId])