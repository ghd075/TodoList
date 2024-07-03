const clock = document.querySelector('#clock');
const dataPrint = document.querySelector('#dataPrint span:first-child');
const timePrint = document.querySelector('#timePrint span:last-child');


function currentTime(){
    const data = new Date();
    const weeks = ['일','월','화','수','목','금','토'];
    const years = data.getFullYear();
    const months = data.getMonth()+1;
    const days = data.getDate();
    const week = weeks[data.getDay()];

    const hours =  String(data.getHours()).padStart(2,"0")
    const minutes = String(data.getMinutes()).padStart(2,"0")
    const seconds = String(data.getSeconds()).padStart(2,"0")

    dataPrint.innerText = `${years}.${months}.${days}.(${week})`;
    timePrint.innerText = `${hours}:${minutes}:${seconds}`
}
currentTime()
setInterval(currentTime, 1000);