function displayTime(){
const d=new Date();
let hours=String(d.getHours())
const am_pm=hours>=12?'PM':'AM';
hours=hours%12;
hours=hours?hours:12;
const minutes=String(d.getMinutes()).padStart(2,'0');
const seconds=String(d.getSeconds()).padStart(2,'0');
const timeString=`${hours}:${minutes}:${seconds} ${am_pm}`;
const timeDisplay=document.getElementById('clock').textContent=timeString;
}
setInterval(displayTime,1000);

displayTime();

const body=document.querySelector('clock');
const toggle=document.getElementById("toggle");
toggle.onclick=function(){
    toggle.classList.toggle('active');
    clock.classList.toggle('active');
}