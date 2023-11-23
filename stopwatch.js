var interval;
var minute = 0;
var seconds = 0;
var milliseconds = 0;
var updateM = document.getElementById("minute");
var updateMS = document.getElementById("milliseconds");
var updateS = document.getElementById("seconds");


function startTimer(){
    interval = setInterval(startTimerInterval,10);
}

function startTimerInterval(){
    milliseconds++;

    if(milliseconds < 10){
        updateMS.innerHTML = "0" + milliseconds;
    } else{
        updateMS.innerHTML = milliseconds;
    }

    if(milliseconds > 99){
        seconds++;
        updateS.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        milliseconds = 0;
        updateMS.innerHTML = "00";
    }

    if(seconds > 59){
        minute++;
        updateM.innerHTML = minute < 10 ? "0" + minute : minute;
        seconds = 0;
        updateS.innerHTML = "00";
    }
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    minute = 0;
    updateMS.innerHTML = "00";
    updateS.innerHTML = "00";
    updateM.innerHTML = "00";
}
