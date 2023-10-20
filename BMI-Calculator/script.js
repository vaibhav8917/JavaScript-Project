
const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', CalculateBMI);

function CalculateBMI(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height == "" || isNaN(height) || height<=0) {
        result.innerHTML = "Enter valid height";
    }
    else if (weight == "" || isNaN(weight) || weight<=0) {
        result.innerHTML = "Enter valid weight";
    }

    const bmi = (weight / ((height*height) / 10000)).toFixed(2);

    if(bmi < 18.5){
        result.innerHTML = `Underweight : ${bmi}`;
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        result.innerHTML = `Normal Weight : ${bmi}`;
    }
    else if(bmi >= 25 && bmi <=29.9){
        result.innerHTML = `Over Weight : ${bmi}`;
    }
    else if(bmi >= 30){
        result.innerHTML = `Obesity : ${bmi}`;
    }
}   