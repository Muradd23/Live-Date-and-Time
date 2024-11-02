let showDate = document.getElementById('date');
let showTime = document.getElementById('time');

let date = new Date();

let daysWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

showDate.innerHTML = `${daysWeek[date.getDay()]}, ${date.getDay()} of ${months[date.getMonth()]} of the ${date.getFullYear()}`

setInterval(()=>{
    let hour = new Date();
    showTime.innerHTML = hour.toLocaleTimeString();
},1000);