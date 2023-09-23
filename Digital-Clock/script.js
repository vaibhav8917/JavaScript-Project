let hour =  document.getElementById('hour');
let minute =  document.getElementById('minute');
let second =  document.getElementById('second');
let session = document.getElementById('session');

function Time(){
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hr == 0){
        hr = 12;
    }
    if(hr > 12){
        hr = hr - 12;
        session.innerHTML = "PM";
    }
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec; 
    
    hour.innerHTML = hr;
    minute.innerHTML= min;
    second.innerHTML = sec;
}
setInterval(Time, 1000);

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let weekday = weekDays[d.getDay()];
let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();
document.getElementById('day').innerHTML = weekday;
document.getElementById('month').innerHTML = month;
document.getElementById('date').innerHTML = date;
document.getElementById('year').innerHTML = year;
