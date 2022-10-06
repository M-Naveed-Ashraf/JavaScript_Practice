// by simply assigning the list enclosed in square brackets
const languages = ['English', 'Urdu', 'Punjabi'];

// I am expecting to add hindi after punjabi
languages[4] = 'Hindi';

// Now I want to access last two items
console.log(languages.slice(-2));

// here I did a mistake, actually arrays start from 0 index instead of 1.
// so the last index is 2 and hindi should be add at 3
languages[3] = 'Hindi';
// let's remove the 4th index created mistakenly
languages.pop();


// Now I want to access last two items
console.log(languages.slice(-2));