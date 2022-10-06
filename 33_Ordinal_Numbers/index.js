const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach( elem => {
    if(elem > 3) {
        console.log(`${elem}th`)
    } else if(elem === 3) {
        console.log(`${elem}rd`)
    } else if(elem === 2) {
        console.log(`${elem}nd`)
    } else {
        console.log(`${elem}st`)
    }
})