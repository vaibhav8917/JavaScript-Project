const buttons = document.querySelectorAll('.button');
const input = document.getElementById('display');

var currentInput = '';

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        currentInput = currentInput + button.value;
        input.value = currentInput;
    })
})

function clearDisplay(){
    currentInput = '';
    input.value = '';
}

function Calculate(){
    if(currentInput){
        input.value = eval(currentInput);
    }
    else{
        input.value = 'ERROR';
    }
}