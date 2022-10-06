var megicians = ['Megician 1', 'Megician 2', 'Megician 3'];

make_great(megicians)

function show_magicians(megicians) {
    megicians.forEach( elem => {
        console.log(elem);
    }) 
}

function make_great() {
    megicians = megicians.map( elem => `The great ${elem}`);
    show_magicians(megicians);
}

