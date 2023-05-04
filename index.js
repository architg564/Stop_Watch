console.log('welcome to hell');

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let interval;
const a = 0;

start.addEventListener("click", () => {

    interval = setInterval(() => {
        if (minutes.textContent == "59") {
            hours.textContent = (parseInt(hours.textContent) + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
            minutes.textContent = -1;
        }
        if (seconds.textContent == "59") {
            minutes.textContent = (parseInt(minutes.textContent) + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
            seconds.textContent = -1;
        }
        seconds.textContent = (parseInt(seconds.textContent) + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    }, 1000);
})


stop.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    hours.textContent = a.toLocaleString('en-US', { minimumIntegerDigits: 2 });
    minutes.textContent = a.toLocaleString('en-US', { minimumIntegerDigits: 2 });
    seconds.textContent = a.toLocaleString('en-US', { minimumIntegerDigits: 2 });
})