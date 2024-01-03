function callbackFunction() {
    console.log("I am a callback function")
}

function higherOrderFunction(func) {
    console.log("I am higher order function")
    func();
}

higherOrderFunction(callbackFunction);

// Another Example
let radius = [1, 3, 5, 7, 9];
const area = function (radius) {
    return Math.PI * radius * radius;
}
const diameter = function (radius) {
    return 2 * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function (radius, logic) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log("Area is : ", calculate(radius, area));
console.log("Diameter are : ", calculate(radius, diameter));
console.log("circumference are : ", calculate(radius, circumference));

// map(), filter(), reduce(), 
const output = radius.map((num) => num + 10);
console.log("Added 10 to radius : ", output);

const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 30 },
    { firstName: 'Jack', lastName: 'Doe', age: 35 },
    { firstName: 'Jill', lastName: 'Doe', age: 40 },
    { firstName: 'Joe', lastName: 'Doe', age: 45 },
]
const fullNames = users.map((user) => user.firstName + " " + user.lastName);
console.log("Users full names : ", fullNames);

const numbers = [1, 2, 3, 4, 100, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(number => number % 2 == 0);
const oddNumbers = numbers.filter(number => number % 2 != 0);
const overAge = users.filter(({ age }) => age > 30);
console.log("Odd numbers are : ", oddNumbers, "\nEven numbers are: ", evenNumbers)
console.log("Over age candidates : ", overAge);

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0);
console.log("Sum using reduce : ", sum);
const maxValue = numbers.reduce((max, curr) => {
    if (curr > max) max = curr;
    return max
});
console.log("Max value : ", maxValue);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObjects = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr }
}, {});
console.log("Megred Objects : ", mergedObjects);

const shoppingCart = [
    { name: 'Apple', price: 1.99, quantity: 3 },
    { name: 'Apple', price: 1.99, quantity: 3 },
    { name: 'Xiomi', price: 2.99, quantity: 2 },
    { name: 'Samsung', price: 3.99, quantity: 1 },
    { name: 'Tesla', price: 3.99, quantity: 1 },
    { name: 'Tesla', price: 4.99, quantity: 4 },
    { name: 'Nokia', price: 4.99, quantity: 4 },
]
const products = shoppingCart.reduce((productGroup, product) => {
    console.log("Product variable : ",product)
    let name = product.name;
    if (productGroup[name] == null) {
        console.log("Yessssssssssssss")
        productGroup[name] = [];
    }
    productGroup[name].push(product);
    return productGroup;
}, {});

console.log("Categorised data : ", products)