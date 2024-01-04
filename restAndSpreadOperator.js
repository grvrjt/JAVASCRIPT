/**
1.The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. 
  But the spread syntax expands iterables into individual elements.

2.The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.
**/

function myInfo(firstName, lastName, ...otherDetails) {
    return otherDetails
}
console.log(myInfo('Gaurav', 'Rajput', 'Backend Developer', 'Male', 'Etah', 'Uttar Pradesh'));


function myBio(firstName, lastName, companyName) {
    return `${firstName} ${lastName} : ${companyName}`
}
console.log(myBio(...['Gaurav', 'Rajput', 'Infosys'])); // Use spread to expand an array’s items into individual arguments:

const [firstName, lastName, ...otherDetails] = ['Gaurav', 'Rajput', 'Backend Developer', 'Etah', 'Uttar Pradesh', 'India'];
console.log('First Name: ', firstName, '\nLast Name: ', lastName, '\nOther Details : ', otherDetails);

const { fName, lName, ...otherInfo } = {
    fName: "Gaurav",
    lName: "Rajput",
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
}
console.log("First Name: ", fName, "\nLast Name: ", lName, "\nOther Info: ", otherInfo);

console.log('\nSpread Example 1: How Spread Works in an Array Literal')
const myName = ["Rajput", 'is', 'my'];
const aboutMe = ['Gaurav', ...myName, 'name'];
console.log(aboutMe)

console.log('\nSpread Example 2:How to Use Spread to Convert a String into Individual Array Items')
const str = 'gauravrajput';
const arr = [...str];
console.log(arr)

console.log('\nSpread Example 3: How the Spread Operator Works in a Function Call')
const numbers = [1, 2, 3, 4];
function sumOfNumbers(a, b, c, d) {
    return a + b + c + d;
}
console.log(sumOfNumbers(...numbers));

console.log('\nSpread Example 4: How Spread Works in an Object Literal')
const myNames = ["Gaurav", "Rajput"];
const bio = { ...myNames, runs: "codesweetly.com" };
console.log(bio);

console.log("\nThe spread operator does not clone identical properties")
const name = { firstName: "Manoj", lastName: "Rajput" };
const withOther = { ...myName, firstName: "Gaurav", website: "codesweetly.com" };
console.log(withOther);


 /**
 * When we use the spread operator on an object (or array) containing only primitive values.
 * The computer will not create any reference between the original object and the duplicated one.
 **/
console.log("\nSpread operator with primitive data");
const rajput = ["Rajput", "is", "my"];
const gaurav = ["Gaurav", ...myName, "name."];
rajput.push('mine');
console.log(gaurav);

const obj1 = { firstName: "Gaurav", lastName: "Rajput" };
const obj2 = { ...obj1 };
obj1.firstName = "Manoj";
console.log(obj1); // { firstName: "Manoj", lastName: "Rajput" }
console.log(obj2); // { firstName: "Gaurav", lastName: "Rajput" }

/**
 * Whenver we use spread operator with non-primitive In that case, 
 * spread will create a reference between the original non-primitive and the cloned one.
 **/
console.log("\nSpread operator with non-primitive data");
const isVery = [["is", "very"]];
const cat = ["Cat", ...isVery, "beautiful."];
isVery[0].push('very');
console.log(cat);

const obj3 = { 
  fullName: { firstName: "Gaurav", lastName: "Rajput" }
};
const obj4 = { ...obj3 };
obj3.fullName.firstName = "Manoj";
console.log(obj3); // { fullName: { firstName: "Manoj", lastName: "Rajput" } }
console.log(obj4); // { fullName: { firstName: "Manoj", lastName: "Rajput" } }