let current_users = ['Admin', 'Naveed', 'Ali', 'Eric', 'Siko'];
let new_users = ['Asad', 'Naveed', 'Ahmad', 'Zia', 'ali'];

new_users.forEach( elem => {
    if(current_users.includes(elem)){
        console.log(`${elem} will need to enter a new username.`);
    } else {
        console.log(`${elem} is available.`);
    }
})