const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const dateFuture = new Date('31 Nov 2023')

function countdown(){
    const newdate = new Date(dateFuture);
    const dateAtual = new Date();

    const totalSeconds = (newdate - dateAtual) / 1000;

    const day = Math.floor(totalSeconds / 3600 / 24)
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minute = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;

    days.innerHTML = day
    hours.innerHTML = format(hour)
    minutes.innerHTML = format(minute)
    seconds.innerHTML = format(second)
}



function format(time){
   return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000)

countdown()