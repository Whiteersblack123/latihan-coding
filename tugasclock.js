setInterval(() => {
    //updating time
    var date = new Date();
    var hour =  date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    
    document.querySelector(".time").innerHTML =
    hour + " : " + minute +" : " + second;
}),1000;

const months = [
    "January",
    "February",
    "April",
    "May",
    "Juny",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Desember",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
date = date < 10 ? "0" + date : date;
let weekday = weekdays[d.getDay()];

document.querySelector(".date").innerHTML =
weekday + "<br /><br />" + date + " " + month + " " + d.getFullYear();
