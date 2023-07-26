function clock(){
    let time = new Date();
    // console.log(time);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = 'AM';
    // console.log(typeof time);

    if(hours > 12){
        amPm = "PM";
    }

    if(seconds == 0){
        seconds = 60;
    }

    if(minutes == 0){
        minutes = 60;
    }

    if(seconds >=1  && seconds <=9){
        seconds = "0" + seconds;
    }

    if(minutes >=1  && minutes <=9){
        minutes = "0" + minutes;
    }

    if(hours > 12){
        hours = hours -12;
       
    }

    document.getElementById('clock').innerText = hours + " : " + minutes + " : " + seconds + " " + amPm;

}

setInterval(clock, 1000);

// Analoge Clock


let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function analogeClock(){
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let hRotation = 30 * hours + minutes/2;
    let mRotation = minutes * 6;
    let sRotation = seconds * 6;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    min.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(analogeClock, 1000);