const d = document.getElementById("day");
const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("second");

var countDate = new Date('Jan 1, 2022 00:00:00').getTime();

function timeToNewYear(){
    var presentDate = new Date().getTime();
    var diff = countDate - presentDate;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var dt = Math.floor(diff / day);
    var ht = Math.floor((diff%day) / hour);
    var mt = Math.floor((diff%hour) / minute);
    var st = Math.floor((diff%minute) / second);

    d.innerText = dt;
    h.innerText = ht;
    m.innerText = mt;
    s.innerText = st;
}

setInterval(function(){
    timeToNewYear();    
},1000);
