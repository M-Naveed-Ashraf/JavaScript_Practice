var guests = ['Sikandar', 'Shahzaib', 'Hammad'];

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

console.log('I just realized that the bigger table is not comming so I can invite only two persons for dinner.');

const removedGuests = guests.splice(2);

removedGuests.forEach( (elem) => {
    console.log(`Hey ${elem}! sorry to inform you that you are not invited anymore.`);
});

guests.forEach(elem => console.log(`Hey ${elem}! The time for dinner is 10pm`));

guests = [];

console.log(guests);