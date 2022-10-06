var userNames = ['Admin', 'Naveed', 'Ali', 'Eric', 'Siko'];

userNames.forEach( elem => {
    if(elem === 'Admin'){
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${elem}, thank you for logging in again.`)
    }
});

userNames = [];

if(userNames.length === 0){
    console.log('We need to find some users!');
}