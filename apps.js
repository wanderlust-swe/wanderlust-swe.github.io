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

let ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

document.getElementById('letters letters-1').innerHTML = m14;
document.getElementById('letters letters-2').innerHTML = m14;
document.getElementById('letters letters-3').innerHTML = m14;


    // let whatDay = new Date().toLocaleDateString('en-US', { weekday:'long' });
    
    function greet () {
    let date = new Date();
    let weekDay = getWeekDay(date);
    document.getElementById('day').innerHTML = weekDay;
    }

    setInterval (greet, 500);



    