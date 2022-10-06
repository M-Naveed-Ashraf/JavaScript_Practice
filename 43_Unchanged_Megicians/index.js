var megicians = ['Megician 1', 'Megician 2', 'Megician 3'];

make_great(megicians)
show_magicians(megicians)

function show_magicians(megicians) {
    megicians.forEach( elem => {
        console.log(elem);
    }) 
}

function make_great() {
    let tempArr = megicians.map( elem => `The great ${elem}`);
    show_magicians(tempArr);
}

