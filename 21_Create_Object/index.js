// creating an object with with two different methods

// using Object constructor and a value as an argument
const obj1 = Object('Okara');
console.log(obj1);

// using Object without any argument
const obj2 = Object();
obj2.key1 = 'My Key';
console.log(obj2);

// using curly braces and key, value pairs in it
const obj3 = {
    greeting: 'hey',
    name: 'Naveed',
    age: 23,
    skills: ['React, JavaScript']
}
console.log(obj3);