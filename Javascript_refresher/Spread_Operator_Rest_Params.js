// Spread Operator and Rest Parameters
const person = {
    name: 'John',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking', 1, true, { name: 'Darshan' }];

// Spread Operator
const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = { ...person };
console.log(copiedPerson);

// Rest Parameters

// Static way
// const toArray = (arg1,arg2,arg3) => {
//     return [arg1,arg2,arg3];
// }

// console.log(toArray(1,2,3));

// Dynamic way

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Destructuring
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies1 = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies1;
console.log(hobby1, hobby2);


