"use strict"

let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let cron;

document.cronometro.start.onclick = () => start();
document.cronometro.pause.onclick = () => pause();
document.cronometro.reset.onclick = () => reset();

function start(){
    pause();
    cron = setInterval(() => {timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset(){
    console.log(milliseconds, seconds, minutes);
    
    
    pause();
    
    hour = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0; 

    document.getElementById('hour').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('milliseconds').innerText = '000';
}

function timer(){
    if((milliseconds +=10) == 1000){
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60)
    {
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minutes').innerText = returnData(minutes);
    document.getElementById('seconds').innerText = returnData(seconds);
    document.getElementById('milliseconds').innerText = returnData(milliseconds);
}

function returnData(input){
    return input > 10 ? input : `0${input}`;
}
