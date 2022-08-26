function clock () {
let todaysDate = new Date();
let hour = todaysDate.getHours();
let minute = todaysDate.getMinutes();
let second = todaysDate.getSeconds(); 

if (hour < 10) {
    hour = "0" + hour;
}
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}

document.getElementById('hour').innerHTML = hour;
document.getElementById('minute').innerHTML = ":" + minute;
document.getElementById('second').innerHTML = ":" + second;
}

setInterval (clock, 1000);