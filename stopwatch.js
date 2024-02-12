let seconds = 0;
let hundred = 0;
let timerElement = document.getElementById("timer");
let intervalId;

function nbrTwoDigits(nb) {
    return nb.toLocaleString('en-US', { minimumIntegerDigits: 2 });
}

function updateTimer() {
    hundred++;
    if (hundred >= 100) {
        hundred = 0;
        seconds++;
    }
    let formattedTime = nbrTwoDigits(seconds) + ":" + nbrTwoDigits(hundred);
    timerElement.textContent = formattedTime;
}

function start_timer() {
    intervalId = setInterval(updateTimer, 10);
}

function stop_timer() {
    clearInterval(intervalId);
}

function reset_timer() {
    stop_timer();
    seconds = 0;
    hundred = 0;
    let formattedTime = nbrTwoDigits(seconds) + ":" + nbrTwoDigits(hundred);
    timerElement.textContent = formattedTime;
}