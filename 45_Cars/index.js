function car(manufacturer, model_name, ...arg) {
    const carObj ={
        manufacturer,
        model_name
    }
    arg.forEach( elem => {
        if(elem instanceof Object){
            Object.keys(elem).forEach((el) => {
                carObj[el] = elem[el]
            })
        }

    })
    return carObj;
}

console.log(car('honda', 'city'));
console.log(car('honda', 'city', {color: 'black', year: '2019'}))
console.log(car('honda', 'city', {color: 'black'}, {stroke: 4}, 'new'))