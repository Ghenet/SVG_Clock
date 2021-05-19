const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


const date= new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("hour: " + hr + " minutes: " + min + " second: " + sec );

//let's declare and initialize the above variables and create positions for each.
let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;

