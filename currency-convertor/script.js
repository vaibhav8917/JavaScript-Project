var dropdowns = document.querySelectorAll('.dropdown select');
const button = document.getElementById('button');
const message = document.querySelector('.msg-box');
const inputAmount = document.querySelector('#amount input');

const dropdownList = ()=>{
    for(let select of dropdowns)
    {
        for(let currCode in countryList){
            var newOptions = document.createElement('option');
            newOptions.innerText = currCode;
            if(select.name === 'from' && currCode ==='USD')
            {
                newOptions.selected = 'selected';
            }
            else if(select.name === 'to' && currCode ==='INR')
            {
                newOptions.selected = 'selected';
            }
            select.appendChild(newOptions);
        }
        select.addEventListener('change', (e) => {
            updateFlag(e.target);
        })
    } 
}
dropdownList();

const updateFlag = (country) => {
    let currencyCode = country.value;
    let countryCode = countryList[currencyCode];
    var image = country.parentElement.querySelector("img");
    image.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

button.addEventListener('click', async (e) => {
    e.preventDefault();

    let amount = inputAmount.value;
    if(amount==='' || amount < 1){
        alert("Enter the valid amount");
    }
    const fromCurrency = document.querySelector(".from select");
    const toCurrency = document.querySelector(".to select");

    const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
    var response = await fetch(URL);
    let data = await response.json();
    let exchangeRate = data[toCurrency.value.toLowerCase()];
    
    let finalAmount = amount * exchangeRate;

    message.innerText = `${amount} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
})