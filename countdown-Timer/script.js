const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

var total = 0;
interval  = null;
function TotalValue() {
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

function Timer() {
    TotalValue();
    total--;

    if(total >= 0){
        var hr = Math.floor(total / 3600);
        var min = Math.floor((total / 60) - (hr*60));
        var sec = total - ((hr*3600) + (min*60));

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        
        hour.value = hr;
        minute.value = min;
        second.value = sec;
    }
    else{
        location.reload();
    }
}

start.addEventListener('click', ()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
})

reset.addEventListener('click', ()=>{
    hour.value = '';
    minute.value = '';
    second.value = '';
})
