const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-/\{}[]";

const total = document.querySelector('#select');
const button = document.querySelector('#button');
const password = document.querySelector('#password');

function generatePassword(){
    let pass = '';
    for(let i = 0; i < total.value; i++){
        const random = Math.floor(Math.random() * chars.length);
        pass += chars[random];
    }
    password.value = pass;
}

button.addEventListener('click',generatePassword);






