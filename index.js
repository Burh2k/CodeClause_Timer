var currentDate = new Date();
var newyear = new Date(currentDate.getFullYear() + 1, 0, 1);
var timenew = newyear - currentDate;

var counting;
//Chaning the milliseconds to required time.
var daytime = Math.floor(timenew / (1000 * 60 * 60 * 24));
var hourtime = Math.floor((timenew % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var mintime = Math.floor((timenew % (1000 * 60 * 60)) / (1000 * 60));
var sectime = Math.floor((timenew % (1000 * 60)) / 1000);

document.getElementById('day').textContent = daytime;
document.getElementById('hour').textContent = hourtime;
document.getElementById('min').textContent = mintime;
document.getElementById('sec').textContent = sectime;

function count() {
    counting = setInterval(function () {
        if (sectime >= 0) {
            document.getElementById("sec").textContent = sectime.toString().padStart(2, '0');
            if (sectime == 0) {
                sectime = 60;
                mintime--;
                document.getElementById("min").textContent = mintime.toString().padStart(2, '0');
            }
            if (mintime == 0) {
                sectime = 60;
                mintime = 60;
                hourtime--;
                document.getElementById("hour").textContent = hourtime.toString().padStart(2, '0');
            }
            if (hourtime == 0) {
                sectime = 60;
                mintime = 60;
                hourtime = 24;
                daytime--;
                document.getElementById("day").textContent = daytime.toString().padStart(3, '0');
            }
            sectime--;
        } else {
            clearInterval(counting);
        }
    }, 1000)
    // else {
    //     clearTimeout(counting);
    // }
}
function start() {
    count();
}
function stop() {
    clearInterval(counting);
}
function clc() {
    document.getElementById("day").textContent = "360";
    document.getElementById("hour").textContent = "24";
    document.getElementById("min").textContent = "60";
    document.getElementById("sec").textContent = "60";
    // Reset the countdown values to their initial values
    daytime = 360;
    hourtime = 24;
    mintime = 60;
    sectime = 60;
    if (!counting) {
        count();
    }
}