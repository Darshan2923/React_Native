const name = 'Darshan';
let age = 25;
const hasHobbies = true;

// name = 'Chiku' //gives an error
// let age = 20  // will give error
age = 20

// Normal function
// function summarizeUser(userName, userAge, userHasHobbies) {
//     return 'Name is ' + userName + ' and age is ' + userAge + 'and the user has hobbies: ' + userHasHobbies;
// }

// Arrow function (recommended)
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return 'Name is ' + userName + ' and age is ' + userAge + 'and the user has hobbies: ' + userHasHobbies;
}

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));
