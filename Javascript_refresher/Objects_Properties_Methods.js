
// Objects, Properties & Methods
const person = {
    name: 'John',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();


// Arrays & Array Methods
const hobbies = ['Sports', 'Cooking', 1, true, { name: 'Darshan' }];
for (let hobby of hobbies) {
    console.log(hobby);
}

hobbies.push('Programming');
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

console.log(hobbies);