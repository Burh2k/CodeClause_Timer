var millitime = parseInt(document.getElementById("milli").textContent);
var sectime = parseInt(document.getElementById("sec").textContent);
var mintime = parseInt(document.getElementById("min").textContent);
var hourtime = parseInt(document.getElementById("hour").textContent);
var daytime = parseInt(document.getElementById("day").textContent);
function count() {
    if (millitime >= 0) {
        document.getElementById("milli").textContent = millitime;
        if (millitime == 0) {
            millitime = 61;
            sectime--;
            document.getElementById("sec").textContent = sectime;
        }
        if (sectime == 0) {
            millitime = 61;
            sectime = 61;
            mintime--;
            document.getElementById("min").textContent = mintime;
        }
        if (mintime == 0) {
            millitime = 61;
            sectime = 61;
            mintime = 61;
            hourtime --;
            document.getElementById("hour").textContent = hourtime;
        }
        if (hourtime == 0) {
            millitime = 61;
            sectime = 61;
            mintime = 61;
            hourtime = 24;
            daytime--;
            document.getElementById("day").textContent = daytime;
        }
        millitime--;
        setTimeout(count,18);
    }
}
count();