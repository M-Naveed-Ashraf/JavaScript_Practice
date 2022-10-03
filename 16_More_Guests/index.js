const guests = ['Sikandar', 'Shahzaib', 'Hammad'];

console.log(`let\'s call ${guests.join(', ')} to the dinner`)

console.log(`${guests[2]} can't join us on dinner. let\'s add Ali instead of Hammad to our guest\'s list.`);

// let's add Ali instead hammad in our guests list
guests[2] = 'Ali';

console.log('Hey guys! we just got a bigger dinner table and now we can invite 3 more persons at dinner.')

// add the person in the start of the array
guests.unshift('Zia Khan');

// add the person to the middle of the array
guests.splice(1, 0, 'Asad');

// add the person to the end of the array
guests.push('Adeel');

guests.forEach( elem => console.log(`Hey ${elem}! I would like to invite you on dinner.`));