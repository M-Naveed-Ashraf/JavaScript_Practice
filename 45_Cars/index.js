function car(manufacturer, model_name, ...arg) {
    const carObj ={
        manufacturer,
        model_name
    }
    arg.forEach( elem => {
        carObj[Object.keys(elem)[0]] = Object.values(elem)[0]
    })
    return carObj;
}

console.log(car('honda', 'city'));
console.log(car('honda', 'city', {color: 'black'}))
console.log(car('honda', 'city', {color: 'black'}, {stroke: 4}))