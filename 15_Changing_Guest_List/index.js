const guests = ['Sikandar', 'Shahzaib', 'Hammad'];

console.log(`let\'s call ${guests.join(', ')} to the dinner`)

console.log(`${guests[2]} can't join us on dinner. let\'s add Ali instead of Hammad to our guest\'s list.`);

// let's add Ali instead hammad in our guests list

guests[2] = 'Ali';

guests.forEach( elem => console.log(`Hey ${elem}! I would like to invite you on dinner.`));