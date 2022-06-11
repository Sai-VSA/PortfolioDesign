const date_date = document.querySelector('h2');
const date_time = document.querySelector('h3');
const months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function refresh_date() {
    const date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    date_date.textContent = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        minutes = '0' + minutes;
    }
    date_time.textContent = hours + ":" + minutes + ":" + seconds;
}

refresh_date();


window.setInterval(refresh_date, 1000);