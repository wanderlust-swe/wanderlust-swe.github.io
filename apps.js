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

    let btn = document.getElementById('btn');
    let clickbox = document.getElementById('clickbox');
    let quote = ['Cuddle', 'Watch a Movie Together',
    'Play Card Games', 'Talk for Hours', 
    'Play Who Wants To Be a Millionaire',
    'Watch Big Bang', 'Watch TVB Dramas',
    'Nap', 'Teach Bei How to Cut Bittermelon Properly' ];

    btn.addEventListener('click', function(){
        let randomQuote = quote[Math.floor(Math.random() * quote.length)]
        clickbox.innerHTML = randomQuote;
    })



    