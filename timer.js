alert('Made by @moldybiscuits1904')

var Sec = 0;
var Min = 0;
var Hr = 0;
var Interval;

function twoDigits(digit) {
  if (digit < 10) {
    return ('0' + digit);
  } else {
    return (digit);
  }
}

function Start() {
  Interval = setInterval(Watch, 1000);
}

function Pause () {
  clearInterval(Interval);
}
function Stop () {
  clearInterval(Interval);
  Hr = 0;
  Min = 0;
  Sec = 0;
  document.getElementById(`watch`).innerHTML=(`0${Hr}:0${Min}:0${Sec}`);
}

function Watch () {
  console.log(`It works!`);
  
  document.getElementById(`watch`).innerHTML=(`${twoDigits(Hr)}:${twoDigits(Min)}:${twoDigits(Sec)}`);
  Sec = Sec + 1;
  
  if (Sec >= 60) {
    Min = Min + 1;
    Sec = 0;
  }
  if (Min >= 59) {
    Hr = Hr + 1;
    Min = 0;
  }
}